import { QueryClient, DefaultOptions } from "@tanstack/react-query"
import { type ReactNode } from "react"

export const QueryConfig: DefaultOptions = {
  queries: {
    // retry: false,
  },
}

export const queryClient = new QueryClient({ defaultOptions: QueryConfig })

export interface QueryClientProviderWrapperProps {
  children: ReactNode
}
