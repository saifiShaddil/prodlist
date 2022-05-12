import React from "react"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <div className="h-full w-full">
      <Nav />
      {children}
    </div>
  )
}

export default Layout
