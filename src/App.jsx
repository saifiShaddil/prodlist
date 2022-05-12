import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import AddProduct from "./Pages/AddProduct"
import AllProducts from "./Pages/AllProducts"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AllProducts />} />
      <Route path="add-product" element={<AddProduct />} />
      <Route path="*" element={<AllProducts />} />
    </Routes>
  )
}

export default App
