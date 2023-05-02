import { factory, primaryKey } from "@mswjs/data"

const models = {
  user: {
    id: primaryKey(Number),
    name: String,
    email: String,
  },
}

export const db = factory(models)

export type Model = keyof typeof db

// localStorageからデータ取得
export const loadDb = () => Object.assign(JSON.parse(window.localStorage.getItem("msw-db") || "{}"))

// localStorageへデータ保存
export const persistDb = (model: Model) => {
  const data = loadDb()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  data[model] = db[model].getAll()
  window.localStorage.setItem("msw-db", JSON.stringify(data))
}

// モックDBの初期化
export const initializeDb = () => {
  const database = loadDb()
  // DBの復元
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key]
    if (dataEntres) {
      // 既存のエンティティを削除
      db.user.deleteMany({
        where: {
          id: {
            lt: dataEntres.length + 1,
          },
        },
      })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dataEntres?.forEach((entry: Record<string, unknown>) => {
        model.create(entry)
      })
    }
  })
}

// localStorageをリセット
export const resetDb = () => {
  window.localStorage.clear()
}

// initializeDb()
