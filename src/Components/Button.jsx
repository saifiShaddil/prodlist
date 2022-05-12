import React from "react"

const Button = ({ onClick, text, style }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      type="submit"
      className={
        style +
        "inline-flex uppercase justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2"
      }
    >
      {text}
    </button>
  )
}

export default Button
