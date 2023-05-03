import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppProps } from "next/app"
import { useEffect, useState } from "react"

import { initializeDb } from "@/mocks/db"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks")
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  useEffect(() => {
    if (typeof window === "object") {
      initializeDb()
    }
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  )
}
