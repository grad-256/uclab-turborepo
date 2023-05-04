import { useQuery } from "@tanstack/react-query"

import { type queryConfig } from "@/lib/react-query"

type Users = {
  id: number
  email: string
  name: string
}

const fetchUsers = async (): Promise<Users[]> => {
  const response = await fetch("/api/users")
  const data = await response.json()
  return data
}

// type QueryFnType = typeof fetchUsers

type UseUsersOptions = {
  config?: typeof queryConfig
}

export const useUsers = ({ config = {} }: UseUsersOptions = {}) => {
  return useQuery({
    ...config,
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
    // queryFn: () => "Hello",
  })
}
