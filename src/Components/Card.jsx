import React from "react"

const Card = ({ title, image, description, price, id }) => {
  return (
    <div className="relative flex flex-col justify-start">
      <div className="mx-auto flex w-[233px] flex-col justify-center bg-white rounded-md shadow-xl shadow-slate-300/60">
        <img
          className="aspect-video h-[190px] rounded-t-md object-cover object-center"
          src={`data:image/jpeg;base64,${image.split(",")[1]}`}
        />

        <div className="p-4 flex items-center">
          <div className="flex flex-col flex-1">
            <small className="text-gray-700 capitalize font-bold text-xl">
              {title}
            </small>
            <p className="text-md tracking-tight font-semibold text-slate-600 leading-6">
              {description}
            </p>
          </div>
          <h1 className="text-2xl font-bold text-gray-700 pb-2">{price}</h1>
        </div>
      </div>
    </div>
  )
}

export default Card
