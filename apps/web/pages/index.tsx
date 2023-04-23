import { useState, type FC, useEffect } from "react"

const colors = [
  { name: "primary", code: "#115174" },
  { name: "primary-1", code: "#1E6A93" },
  { name: "primary-2", code: "#4F9DC5" },
  { name: "primary-3", code: "#74ADCC" },
  { name: "sub", code: "#EDB835" },
  { name: "sub-1", code: "#F6D16A" },
  { name: "sub-2", code: "#FFECB7" },
  { name: "accent", code: "#D9773C" },
  { name: "accent-1", code: "#F28F25" },
  { name: "accent-2", code: "#FFA500" },
  { name: "notification", code: "#F44336" },
  { name: "notification-1", code: "#F44336" },
  { name: "notification-2", code: "rgba(222, 0, 0, 0.85)" },
  { name: "success", code: "#439B96" },
  { name: "success-1", code: "#439B96" },
  { name: "success-2", code: "rgba(67, 155, 150, 0.9)" },
  { name: "error", code: "#F57B73" },
  { name: "error-1", code: "#F57B73" },
  { name: "error-2", code: "rgba(245, 123, 115, 0.9)" },
  { name: "link", code: "#1E83B9" },
  { name: "link-1", code: "#1E83B9" },
  { name: "background", code: "#F5F5F5" },
  { name: "background-1", code: "#F5F5F5" },
  { name: "background-2", code: "#EEEEEE" },
  { name: "background-3", code: "#CFE8F5" },
  { name: "background-4", code: "#FFF2DF" },
  { name: "category", code: "#E7B660" },
  { name: "category-1", code: "#E7B660" },
  { name: "category-2", code: "#EECE95" },
  { name: "category-3", code: "#A59FDF" },
  { name: "category-4", code: "#C4B0D7" },
  { name: "category-5", code: "#8299CA" },
  { name: "category-6", code: "#ADBFE7" },
  { name: "category-7", code: "#9FCE60" },
  { name: "category-8", code: "#B8E198" },
  { name: "category-9", code: "#5FB660" },
  { name: "category-10", code: "#8DD28E" },
  { name: "category-11", code: "#EA9999" },
  { name: "category-12", code: "#F4B5B5" },
  { name: "line", code: "#CFD0D7" },
  { name: "line-1", code: "#CFD0D7" },
  { name: "line-2", code: "rgba(0, 0, 0, 0.16)" },
  { name: "disabled", code: "#E5E5E5" },
  { name: "disabled-1", code: "#E5E5E5" },
  { name: "black", code: "#050505" },
  { name: "black-1", code: "#4D4D4D" },
  { name: "black-2", code: "#777777" },
  { name: "black-3", code: "#A0A0A0" },
  { name: "black-4", code: "#B5B5B5" },
  { name: "white", code: "#FFFFFF" },
  { name: "white-1", code: "rgba(255, 255, 255, 0.8)" },
  { name: "overlay", code: "rgba(0, 0, 0, 0.48)" },
  { name: "overlay-1", code: "rgba(0, 0, 0, 0.48)" },
  { name: "overlay-2", code: "rgba(255, 255, 255, 0.16)" },
  { name: "overlay-3", code: "rgba(0, 0, 0, 0.24)" },
  { name: "overlay-4", code: "rgba(13, 87, 128, 0.72)" },
  { name: "rank", code: "#F6D662" },
  { name: "rank-1", code: "#F6D662" },
  { name: "rank-2", code: "#CFD0D9" },
  { name: "rank-3", code: "#D7956E" },
  { name: "rank-4", code: "#E5E5E5" },
  { name: "sns-twitter", code: "#1DA1F2" },
]

const ColorBox = ({ color, name }) => {
  return (
    <div
      className="bg-color"
      style={{
        backgroundColor: color,
        color: name.startsWith("white") ? "#000" : "#fff",
        padding: "8px",
        margin: "4px",
        display: "inline-block",
        borderRadius: "4px",
      }}
    >
      {name} ({color})
    </div>
  )
}

const colorsAlt = [
  { name: "COLOR_PRIMARY", code: "#115174" },
  { name: "COLOR_PRIMARY_1", code: "#1E6A93" },
  { name: "COLOR_PRIMARY_2", code: "#4F9DC5" },
  { name: "COLOR_PRIMARY_3", code: "#74ADCC" },
  { name: "COLOR_LINK_1", code: "#1E83B9" },
  { name: "COLOR_LINE_1", code: "#CFD0D7" },
  { name: "COLOR_LINE_2", code: "rgba(0, 0, 0, 0.16)" },
  { name: "COLOR_BLACK", code: "#050505" },
  { name: "COLOR_BLACK_1", code: "#4D4D4D" },
  { name: "COLOR_BLACK_2", code: "#777777" },
  { name: "COLOR_BLACK_3", code: "#A0A0A0" },
  { name: "COLOR_BLACK_4", code: "#B5B5B5" },
  { name: "COLOR_WHITE", code: "#FFFFFF" },
  { name: "COLOR_SUCCESS_1", code: "#439B96" },
  { name: "COLOR_SUCCESS_2", code: "rgba(67, 155, 150, 0.9)" },
  { name: "COLOR_ERROR_1", code: "#F57B73" },
  { name: "COLOR_ERROR_2", code: "rgba(245, 123, 115, 0.9)" },
]

const index: FC = () => {
  return (
    <>
      <h1>tailwind.config.js</h1>
      <div>
        {colors.map((color) => (
          <ColorBox key={color.name} color={color.code} name={color.name} />
        ))}
      </div>
      <h1>colorCodes</h1>
      <div>
        {colorsAlt.map((color) => (
          <ColorBox key={color.name} color={color.code} name={color.name} />
        ))}
      </div>
    </>
  )
}

export default index
