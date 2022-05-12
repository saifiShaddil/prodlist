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
      {productList && (
        <>
          {/* <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="flex justify-around">
                      <tr></tr>
                      <tr className="text-md font-bold">Name</tr>
                      <tr className="text-md font-bold">Description</tr>
                      <tr className="text-md font-bold">Price</tr>
                    </thead>
                    <tbody>
                      {productList.map((product, index) => {
                        return (
                          <List
                            key={index}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.Image}
                          />
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}
          <div class="flex flex-col w-[90%] md:w-[75%] mx-auto">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        ></th>
                        <th
                          scope="col"
                          class="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {productList &&
                        productList.map((product, index) => {
                          return (
                            <List
                              key={index}
                              id={product.id}
                              name={product.name}
                              description={product.description}
                              price={product.price}
                              image={product.Image}
                            />
                          )
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  )
}
const mapStateToProps = (state) => ({
  list: state.data,
  refresh: state.success,
})
export default connect(mapStateToProps, null)(AddProduct)
