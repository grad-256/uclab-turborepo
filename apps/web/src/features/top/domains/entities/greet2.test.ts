import { greet, sayGoodBye } from "./greet"

jest.mock("./greet")

test("挨拶を返さない（本来の実装ではない）", () => {
  expect(greet("World")).toBe(undefined)
})

test("エラー", () => {
  expect(sayGoodBye("World")).toBe(undefined)
})
