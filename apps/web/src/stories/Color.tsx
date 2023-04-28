import React, { type FC } from "react"

import { type ColorType, colors, colorsAlt } from "@/config/color"

const ColorBox = ({ code, name }: ColorType) => {
  return (
    <div
      className="bg-color"
      style={{
        backgroundColor: code,
        color: name.startsWith("white") ? "#000" : "#fff",
        padding: "8px",
        margin: "4px",
        display: "inline-block",
        borderRadius: "4px",
      }}
    >
      {name} ({code})
    </div>
  )
}

export const Color: FC = () => {
  return (
    <article>
      <h1>tailwind.config.js</h1>
      <div>
        {colors.map((color) => (
          <ColorBox key={color.name} code={color.code} name={color.name} />
        ))}
      </div>
      <h1>colorCodes</h1>
      <div>
        {colorsAlt.map((color) => (
          <ColorBox key={color.name} code={color.code} name={color.name} />
        ))}
      </div>
    </article>
  )
}
