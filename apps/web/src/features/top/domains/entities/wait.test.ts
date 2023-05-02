import { wait } from "./wait"

describe("wait", () => {
  test("指定時間待つと、経過時間をもって resolve される", () => {
    return wait(50).then((duration) => {
      expect(duration).toBe(50)
    })
  })
  test("指定時間待つと、経過時間をもって resolve される", () => {
    return expect(wait(50)).resolves.toBe(50)
  })
  test("指定時間待つと、経過時間をもって resolve される", async () => {
    await expect(wait(50)).resolves.toBe(50)
  })
  test("指定時間待つと、経過時間をもって resolve される", async () => {
    expect(await wait(100)).toBe(100)
  })
})

// test("return していないため、Promise が解決する前にテストが終了してしまう", () => {
//   // 失敗を期待して書かれたアサーション
//   // expect(wait(2000)).resolves.toBe(3000)
//   // 正しくはアサーションを return する
//   return expect(wait(2000)).resolves.toBe(3000)
// })
