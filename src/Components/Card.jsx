import React from "react"

const Card = ({ title, image, description, price, id }) => {
  return (
    <div className="relative flex flex-col justify-start">
      <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-md shadow-xl shadow-slate-300/60">
        <img
          className="aspect-video w-96 rounded-t-md object-cover object-center"
          src={`data:image/jpeg;base64,${image.split(",")[1]}`}
        />

        <div className="p-4 flex items-center">
          <div className="flex flex-col flex-1">
            <small className="text-gray-500 text-xl">{title}</small>
            <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
              {description}
            </p>
          </div>
          <h1 className="text-2xl font-medium text-slate-600 pb-2">{price}</h1>
        </div>
      </div>
    </div>
  )
}

export default Card
