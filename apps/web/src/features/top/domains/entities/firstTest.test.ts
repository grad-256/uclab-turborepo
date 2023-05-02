import { firstTest } from "./firstTest"

describe("初めてのテスト", () => {
  it("0を期待している", () => {
    const result = firstTest(0)
    expect(result).toBe(true)
  })
  it("1を期待している", () => {
    const result = firstTest(1)
    expect(result).toBe(false)
  })
})
