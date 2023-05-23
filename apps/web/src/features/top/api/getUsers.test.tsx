// import { renderHook, act } from "@testing-library/react"
// import { rest } from "msw"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import React from "react"

// import * as fetchUsers from "./getUsers"
// import { useUsers, fetchUsers } from "./getUsers"
// import { fetchUsers } from "./getUsers"
// import { createQueryWrapper } from "../../../lib/createQueryWrapper"
// import { server } from "../../../mocks/server"
// import { rest } from "msw"
// import { setupServer } from "msw/node"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// const { queryWrapper, queryClient } = createQueryWrapper()

// jest.mock("./getUsers")
// const server = setupServer(
//   rest.get("/api/me", (req, res, ctx) => {
//     return res(
//       ctx.json({
//         name: "name",
//         email: "test@gmail.com",
//         description: "description",
//       }),
//     )
//   }),
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

describe("useStrStorage", () => {
  // 初期データを設定する
  // const init = {
  //   name: "name",
  //   id: 1,
  //   email: "email",
  // }
  // const mockFn = jest.fn()
  // beforeAll(() => {
  //   server.listen()
  //   // queryClient.setQueryData(["me"], init)
  // })

  // beforeEach(() => {
  //   server.resetHandlers()
  //   // queryClient.clear()
  //   // jest.clearAllMocks()
  // })

  // afterAll(() => {
  //   // jest.restoreAllMocks()
  //   server.close()
  // })

  // afterEach(() => {
  // queryClient.clear()
  // })

  test("初めてのMSWテスト", async () => {
    // const dddd = await fetchUsers()
    console.log("dddd")
    // expect(dddd).toEqual({ description: "description", email: "test@gmail.com", name: "name" })
  })

  // test("ボタンを押下すると、API が呼ばれる", async () => {
  //   jest.spyOn(fetchUsers, "fetchUsers").mockImplementation(() => {
  //     return Promise.resolve([
  //       {
  //         name: "name",
  //         email: "email",
  //         id: 1,
  //       },
  //     ])
  //   })

  //   console.log(fetchUsers.fetchUsers())

  //   await expect(fetchUsers.fetchUsers()).resolves.toStrictEqual([
  //     { email: "email", id: 1, name: "name" },
  //   ])
  //   // const response = await fetchUsers()
  //   // console.log(response)

  //   // const { result } = renderHook(() => useUsers(), { wrapper: queryWrapper })

  //   // await act(() => {
  //   //   return !!result.current.data
  //   // })

  //   // console.log(result.current.data)
  // })
})
