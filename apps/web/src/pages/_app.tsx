import { initializeDb } from "@/mocks/db"
import { AppProps } from "next/app"
import { useEffect } from "react"

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks")
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window === "object") {
      initializeDb()
    }
  }, [])
  return <Component {...pageProps} />
}
