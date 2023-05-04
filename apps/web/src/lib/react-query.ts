import { QueryClient, DefaultOptions } from "@tanstack/react-query"
import { type ReactNode } from "react"

export const queryConfig: DefaultOptions = {
  queries: {
    // retry: false,
  },
}

export const queryClient = new QueryClient({ defaultOptions: queryConfig })

export interface QueryClientProviderWrapperProps {
  children: ReactNode
}
