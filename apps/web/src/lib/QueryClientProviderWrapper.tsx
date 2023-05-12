import { QueryClientProvider } from "@tanstack/react-query"
import React, { FC } from "react"

import { QueryClientProviderWrapperProps, queryClient } from "../lib/reactQuery"

export const QueryClientProviderWrapper: FC<QueryClientProviderWrapperProps> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
