import { timeout } from "./wait"

describe("timeout", () => {
  test("指定時間待つと、経過時間をもって reject される", () => {
    return timeout(50).catch((duration) => {
      expect(duration).toBe(50)
    })
  })
  test("指定時間待つと、経過時間をもって reject される", () => {
    return expect(timeout(50)).rejects.toBe(50)
  })
  test("指定時間待つと、経過時間をもって reject される", async () => {
    await expect(timeout(50)).rejects.toBe(50)
  })
})

test("指定時間待つと、経過時間をもって reject される", async () => {
  expect.assertions(2)
  try {
    await timeout(50) // timeout関数のつもりが、wait関数にしてしまった
    // ここで終了してしまい、テストは成功する
  } catch (err) {
    // アサーションは実行されない
    expect(err).toBe(50)
  }
  try {
    await timeout(100) // timeout関数のつもりが、wait関数にしてしまった
    // ここで終了してしまい、テストは成功する
  } catch (err) {
    // アサーションは実行されない
    expect(err).toBe(100)
  }
})
