import { renderHook, act } from "@testing-library/react"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react"

import { useUsers } from "./getUsers"
import { createQueryWrapper } from "../../../lib/createQueryWrapper"

const { queryWrapper, queryClient } = createQueryWrapper()

describe("useStrStorage", () => {
  // 初期データを設定する
  const init = {
    name: "name",
    id: 1,
    email: "email",
  }

  beforeAll(() => {
    queryClient.setQueryData(["users"], init)
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  afterEach(() => {
    queryClient.clear()
  })

  test("初めてのreact-queryのテスト", async () => {
    const { result } = renderHook(() => useUsers(), { wrapper: queryWrapper })

    await act(() => {
      return !!result.current.data
    })

    expect(result.current.data).toEqual(init)
  })
})
