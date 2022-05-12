import React from "react"
import { useDispatch } from "react-redux"
import { REMOVE_PROD } from "../store/actionType"

const List = ({ id, name, image, price }) => {
  const dispatch = useDispatch()
  const removeProduct = () => {
    dispatch({
      type: REMOVE_PROD,
      payload: id,
    })
  }
  return (
    <div className="flex w-[80%] overflow-x-hidden shadow-md shadow-slate-300/60 rounded-md md:w-[70%] mt-4 mx-auto p-4 items-center">
      <div className="flex-1 flex">
        <img
          src={`data:image/jpeg;base64,${image.split(",")[1]}`}
          alt="product_name"
          className="w-16 h-16 bg-white mr-2"
        />
        <div className="flex flex-col items-start ml-6">
          <strong className="text-gray-700 tracking-wide font-bold text-xl">
            {name}
          </strong>
          <p className="text-md tracking-tight text-gray-700 font-semibold leading-6">
            {price}
          </p>
        </div>
      </div>
      <p
        onClick={() => removeProduct()}
        className="text-md text-blue-700 cursor-pointer px-4 py-2 rounded-md hover:text-blue-800 transition hover:bg-blue-400"
      >
        Remove
      </p>
    </div>
  )
}

export default List
