import { add, addCheck } from "./add"

describe("add関連のテストコード", () => {
  describe("add", () => {
    test("1 + 6 は 7", () => {
      expect(add(1, 6)).toBe(7)
    })
    test("1 + 100 は 3", () => {
      expect(add(1, 100)).toBe(10)
    })
  })

  describe("addCheck", () => {
    test("引数が'0〜100'の範囲外だった場合、例外をスローする", () => {
      const message = "入力値は0〜100の間で入力してください"
      expect(() => addCheck(-10, 10)).toThrow(message)
      expect(() => addCheck(10, -10)).toThrow(message)
      expect(() => addCheck(-10, 110)).toThrow(message)
    })
  })
})
