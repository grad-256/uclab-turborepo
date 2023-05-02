import { sayGoodBye } from "./greet"

jest.mock("./greet", () => ({
  ...jest.requireActual("./greet"),
  sayGoodBye: (name: string) => `Good Bye ${name}`,
}))

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${sayGoodBye("World")}!`
  expect(message).toBe("Good Bye World!")
})
