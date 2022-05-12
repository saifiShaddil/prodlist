import React from "react"
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <nav className="nav ml-8 p-3 flex items-center">
        <NavLink
          className="text-black text-md font-medium pb-2"
          style={({ isActive }) => ({
            borderBottom: isActive
              ? "#6565f8 solid 3px"
              : "transparent solid 3px",
            opacity: isActive ? 1 : "",
          })}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-black text-md font-medium ml-3 pb-2"
          style={({ isActive }) => ({
            borderBottom: isActive
              ? "#6565f8 solid 3px"
              : "transparent solid 3px",
            opacity: isActive ? 1 : "",
          })}
          to="/add-product"
        >
          Manage Products
        </NavLink>
      </nav>
    </>
  )
}

export default Nav
