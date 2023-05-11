import { Hydrate } from "@tanstack/react-query"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { AppProps } from "next/app"
import React, { Suspense, useEffect } from "react"

import { QueryClientProviderWrapper } from "@/lib/QueryClientProviderWrapper"
import { initializeDb } from "@/mocks/db"

if (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks")
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window === "object") {
      initializeDb()
    }
  }, [])
  return (
    <Suspense fallback={<>...loading</>}>
      <QueryClientProviderWrapper>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        {/* <ReactQueryDevtools /> */}
      </QueryClientProviderWrapper>
    </Suspense>
  )
}
