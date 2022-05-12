import React from "react"
import { useDispatch } from "react-redux"
import { REMOVE_PROD } from "../store/actionType"

const List = ({ id, name, image, price, description }) => {
  const dispatch = useDispatch()
  const removeProduct = () => {
    dispatch({
      type: REMOVE_PROD,
      payload: id,
    })
  }
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <img
          src={`data:image/jpeg;base64,${image.split(",")[1]}`}
          alt="product_name"
          className="w-12 h-12"
        />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {description}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {price}
      </td>
      <td
        onClick={() => removeProduct()}
        className="text-sm cursor-pointer text-blue-700  font-semibild px-6 py-4 hover:text-blue-900 whitespace-nowrap"
      >
        Remove
      </td>
    </tr>
  )
}

export default List
