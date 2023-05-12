import { useQuery } from "@tanstack/react-query"

import { QueryConfig } from "../../../lib/reactQuery"
import "cross-fetch/polyfill"

type Users = {
  id: number
  email: string
  name: string
}

export const fetchUsers = async (): Promise<Users[]> => {
  const response = await fetch("/api/me")
  const data = await response.json()
  return data
}

// type QueryFnType = typeof fetchUsers

type UseUsersOptions = {
  config?: typeof QueryConfig
}

export const useUsers = ({ config = {} }: UseUsersOptions = {}) => {
  return useQuery({
    ...config,
    queryKey: ["me"],
    queryFn: () => fetchUsers(),
    // queryFn: () => "Hello",
  })
}
