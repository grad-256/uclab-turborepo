import { greet } from "./greet"

test("挨拶を返す(実装通り)", () => {
  expect(greet("World")).toBe("Hello World")
})
