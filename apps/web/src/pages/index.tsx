import { FC, useEffect, useState } from "react"

import { Top } from "../features/top/routes/Top"

import { getDb } from "@/mocks/db"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Index: FC = () => {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getfetchData = async () => {
      try {
        const data = await fetcher("/api/users")
        setUsers(data)
      } catch (err) {
        setError(err)
      }
    }

    // fetchDataGet()
    getfetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          id: "1",
          name: "John Doe",
          email: "dsdsd",
        }),
      }).then((res) => res.json())
      setUsers(data)
    } catch (err) {
      setError(err)
    }
  }

  const fetchDataGet = async () => {
    try {
      const data = await fetcher("/api/users")
      console.log(data)

      setUsers(data)
    } catch (err) {
      setError(err)
    }
  }

  console.log(users)
  console.log(error)

  return (
    <>
      <Top />
      <button type="button" onClick={() => fetchDataGet()}>
        get button
      </button>
      <button type="button" onClick={() => fetchData()}>
        post button
      </button>
    </>
  )
}

export default Index
