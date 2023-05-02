import { FC, useEffect, useState } from "react"

import { Top } from "../features/top/routes/Top"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Index: FC = () => {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetcher("/reviews")
        setUsers(data)
      } catch (err) {
        setError(err)
      }
    }

    fetchData()
  }, [])

  console.log(users)
  console.log(error)

  return (
    <>
      <Top />
    </>
  )
}

export default Index
