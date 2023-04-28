import { isZero, isZerov2, sub } from "./"

describe("isZero", () => {
  it("check isZero", () => {
    const result = isZero(0)
    expect(result).toBe(true)
  })
  it("check isZerov2", () => {
    const result = isZerov2(0)
    expect(result).toBe(true)
  })

  describe("sub", () => {
    test("1 - 1 は 0", () => {
      expect(sub(1, 1)).toBe(0)
    })
    test("2 - 1 は 1", () => {
      expect(sub(2, 1)).toBe(1)
    })
  })
})
