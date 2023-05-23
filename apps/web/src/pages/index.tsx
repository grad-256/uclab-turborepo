import React, { FC } from "react"

import { useUsers } from "@/features/top/api/getUsers"
import { Top } from "@/features/top/routes/Top"

const Index: FC = () => {
  const { isLoading, error, data } = useUsers()

  if (error) {
    return <div>...error</div>
  }
  if (isLoading) {
    return <div>...loading</div>
  }

  return (
    <>
      <Top />
      {/* {data?.map((v) => {
        return (
          <div key={`${v.name}-${v.id}`}>
            <p>{v.email}</p>
            <p>{v.name}</p>
          </div>
        )
      })} */}
      <button type="button">get button</button>
      <button type="button">post button</button>
    </>
  )
}

export default Index
