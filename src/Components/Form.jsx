import React, { useRef, useState } from "react"
import Button from "./Button"
import FileInput from "./FileInput"
import FormInput from "./FormInput"
import { useDispatch } from "react-redux"
import { ADD_PROD } from "../store/actionType"
import Alert from "./Alert"

const Form = () => {
  let filebae64

  const nameRef = useRef(null)
  const priceRef = useRef(null)
  const descriptionRef = useRef(null)
  const dispatch = useDispatch()

  const [errmsg, setErrMsg] = useState({ err: false, message: "" })
  const [file, setFile] = useState("")
  const [Product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    Image: "",
    price: "",
  })

  const disMissAlert = () => {
    setTimeout(() => {
      setErrMsg({ err: false, message: "" })
    }, 2000)
  }

  const id = Math.floor(Math.random() * 1000)

  const base64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader(file)
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = () => reject(error)
    })
  const onChange = async (e) => {
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i
    var fileName = e.target.files[0].name
    if (!allowedExtensions.exec(fileName)) {
      setErrMsg({
        err: true,
        message: "Only jpeg, jpg, or png files are allowed",
      })
      disMissAlert()
      return
    } else {
      setFile(fileName)
      filebae64 = await base64(e.target.files[0])
      setProduct({ ...Product, Image: filebae64, id })
    }
  }
  const addProduct = (e) => {
    e.preventDefault()
    if (Product.name === "") {
      setErrMsg({ err: true, message: "Product name Must be specified" })
      disMissAlert()
      return
    }
    if (Product.price === "") {
      setErrMsg({ err: true, message: "Price Must be specified" })
      disMissAlert()
      return
    }
    if (Product.description === "") {
      setErrMsg({ err: true, message: "Description Must be specified" })
      disMissAlert()
      return
    }
    if (Product.Image === "") {
      setErrMsg({ err: true, message: "Please Upload an Image" })
      disMissAlert()
      return
    }
    if (!errmsg.err) {
      dispatch({
        type: ADD_PROD,
        payload: Product,
      })
      setFile("")
      setTimeout(() => {
        nameRef.current.value = ""
        priceRef.current.value = ""
        descriptionRef.current.value = ""
      }, 200)
    }
  }

  return (
    <>
      {errmsg.err && <Alert message={errmsg.message} />}
      <div className="mt-10 sm:mt-0 mx-auto mb-8">
        <div className="md:grid md:grid-cols-2 mx-auto w-[95%] md:w-[60%] md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className=" overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <FormInput
                        Inputref={nameRef}
                        type="text"
                        name="name"
                        label="Product Name"
                        value={Product.name}
                        placeholder="Enter Product Name"
                        setProduct={setProduct}
                        Product={Product}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <FormInput
                        Inputref={priceRef}
                        type="text"
                        label="Price"
                        name="price"
                        value={Product.price}
                        placeholder="Enter Price"
                        setProduct={setProduct}
                        Product={Product}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <FormInput
                        Inputref={descriptionRef}
                        type="text"
                        label="Product Description"
                        optional="true"
                        value={Product.description}
                        name="description"
                        placeholder="Enter Description"
                        setProduct={setProduct}
                        Product={Product}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <FileInput onChange={(e) => onChange(e)} file={file} />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:px-6">
                  <Button
                    text="ADD Product"
                    onClick={(e) => addProduct(e)}
                    style="text-white bg-blue-600 hover:bg-blue-700"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
