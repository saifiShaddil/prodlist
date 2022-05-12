import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Form from "../Components/Form"
import Layout from "../Components/Layout"
import List from "../Components/List"

const AddProduct = ({ list, refresh }) => {
  const [productList, setProductList] = useState(list.length > 0 ? list : [])

  useEffect(() => {
    setProductList(list.length > 0 ? list : [])
  }, [list.length, refresh])

  return (
    <Layout>
      <Form />
      {/* show all the product in list */}
      {productList &&
        productList.map((product, index) => {
          return (
            <List
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.Image}
            />
          )
        })}
    </Layout>
  )
}
const mapStateToProps = (state) => ({
  list: state.data,
  refresh: state.success,
})
export default connect(mapStateToProps, null)(AddProduct)
