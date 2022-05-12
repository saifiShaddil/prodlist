import React from "react"

const FormInput = ({
  type,
  name,
  placeholder,
  label,
  optional,
  Product,
  setProduct,
  Inputref,
}) => {
  const onChange = (e) => {
    setProduct({ ...Product, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase">
        {label}
        <span
          className="text-xs font-md text-gray-300 lowercase ml-2"
          style={{ display: optional ? "inline" : "none" }}
        >
          (optional)
        </span>
      </div>
      {optional ? (
        <textarea
          ref={Inputref}
          type={type}
          name={name}
          placeholder={placeholder}
          resize
          onChange={(e) => onChange(e)}
          className="mt-1 p-2 block bg-white w-full shadow-sm border sm:text-sm border-gray-300 rounded-sm"
        />
      ) : (
        <input
          ref={Inputref}
          type={type}
          name={name}
          placeholder={placeholder}
          resize={optional}
          onChange={(e) => onChange(e)}
          className="mt-1 p-2 block bg-white w-full shadow-sm border sm:text-sm border-gray-300 rounded-sm"
        />
      )}
    </>
  )
}

export default FormInput
