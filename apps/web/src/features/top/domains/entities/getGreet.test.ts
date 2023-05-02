import { httpError } from "./fixtures"
import { getGreet } from "./getGreet"
import * as GetMyProfile from "./getMyProfile"

jest.mock("./getMyProfile")

test("テスト取得成功時の:ユーザー名がある場合", async () => {
  jest.spyOn(GetMyProfile, "getMyProfile").mockImplementation(() => {
    return Promise.resolve({
      id: "1",
      name: "masaru",
      age: 20,
      email: "",
    })
  })

  // const message = await getGreet()
  await expect(getGreet()).resolves.toBe("Hello masaru!")
})

test("データ取得失敗時", async () => {
  expect.assertions(1)
  // getMyProfile が reject した時の値を再現
  jest.spyOn(GetMyProfile, "getMyProfile").mockRejectedValueOnce(httpError)
  try {
    await getGreet()
  } catch (err) {
    expect(err).toMatchObject(httpError)
  }
})
