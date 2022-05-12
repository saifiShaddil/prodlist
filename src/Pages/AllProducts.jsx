import React from "react"
import { connect } from "react-redux"
import Layout from "../Components/Layout"
import Card from "../Components/Card"

const AllProducts = ({ list, refresh }) => {
  if (list.length == 0) {
    return (
      <Layout>
        <h2 className="text-2xl w-full text-center mt-8 font-md text-gray-400">
          No Product Available.
        </h2>
      </Layout>
    )
  }
  return (
    <Layout>
      <div className="flex mt-3 flex-wrap flex-col md:flex-row gap-4 w-[90%] mx-auto md:w-[75%] justify-around">
        {list &&
          list.map((product, index) => {
            return (
              <Card
                key={index}
                title={product.name}
                price={product.price}
                image={product.Image}
                id={product.id}
                description={product.description}
              />
            )
          })}
      </div>
    </Layout>
  )
}
const mapStateToProps = (state) => ({
  list: state.data,
  refresh: state.success,
})
export default connect(mapStateToProps, null)(AllProducts)
