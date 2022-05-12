import React, { useState, useRef } from "react"
import Button from "./Button"

const FileInput = ({ onChange, file }) => {
  const fileRef = useRef(null)

  const getFile = (e) => {
    e.preventDefault()
    fileRef.current.click()
  }

  return (
    <div className="flex justify-center">
      <div className="mb-3 w-96">
        <label
          htmlFor="file"
          className="form-label inline-block mb-2 text-gray-700 font-bold h-6 mt-3 text-sm leading-8 uppercase"
        >
          Product Image{" "}
          <span className="text-xs font-md text-gray-300 lowercase ml-2">
            (optional)
          </span>
        </label>
        <input
          ref={fileRef}
          className="form-control hidden w-full px-3 py-1.5 text-base"
          type="file"
          accept=".jpg,.jpeg,.png"
          id="file"
          onChange={(e) => onChange(e)}
        />
        <div>
          <Button
            text="Browse"
            onClick={(e) => getFile(e)}
            style="text-gray-700 bg-gray-300 hover:bg-gray-500"
          />
          <span className="text-md font-medium text-gray-300 lowercase ml-2">
            {file ? file : "No File Selected"}
          </span>
        </div>
      </div>
    </div>
  )
}

export default FileInput
