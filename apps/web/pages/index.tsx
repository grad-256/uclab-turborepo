import ScoutList from "@/features/scouts/pages/ScoutList"
import { colors } from "@/config/color"
import { useState, type FC, useEffect } from "react"

const index: FC = () => {
  console.log(colors)

  return (
    <>
      <ScoutList />
    </>
  )
}

export default index
