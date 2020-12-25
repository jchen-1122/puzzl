import React, {useState} from "react"
import {Link} from "react-router-dom";

function Form() {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")

    const postToDB = async () => {
        console.log(name)
        const header = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
        fetch("http://localhost:3000/item/post", {
            method: "POST",
            headers: header,
            body: JSON.stringify({
                name: name,
                description: description,
                price: price,
                image: image
            })
        }).then(response => {
            console.log(response)
          })
          .catch(err => {
            console.log(err)
          })
    }

    return (
        <section class="py-40 bg-gray-100  bg-opacity-50 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
            <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
                <div class="inline-flex items-center space-x-4">
                <img
                    class="w-10 h-10 object-cover rounded-full"
                    alt="User avatar"
                    src="https://bookface-images.s3.amazonaws.com/logos/e20d3374c985db0d5e83aa3d2b2dc8c71ce84d46.png"
                />

                <h1 class="text-gray-600">Add an Item to the Puzzl Store</h1>
                </div>
            </div>
            </div>
            <div class="bg-white space-y-6">
            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 class="md:w-1/3 max-w-sm mx-auto">Name</h2>
                <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border">
                    <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
    
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </div>
                    <input
                    type="email"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder="bok choy"
                    onChange={event => setName(event.target.value)}
                    />
                </div>
                </div>
            </div>

            <hr />
            <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <h2 class="md:w-1/3 mx-auto max-w-sm">Description</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                <div>
                    <label class="text-sm text-gray-400">Product Type</label>
                    <div class="w-full inline-flex border">
                    <div class="w-1/12 pt-2 bg-gray-100">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </div>
                    <input
                        type="text"
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="Produce"
                        onChange={event => setDescription(event.target.value)}
                    />
                    </div>
                </div>
                <div>
                    <label class="text-sm text-gray-400">Price</label>
                    <div class="w-full inline-flex border">
                    <div class="pt-2 w-1/12 bg-gray-100">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                    </div>
                    <input
                        type="text"
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="in dollars"
                        onChange={event => setPrice(parseFloat(event.target.value))}
                    />
                    </div>
                    
                </div>
                <div>
                    <label class="text-sm text-gray-400">Image Link</label>
                    <div class="w-full inline-flex border">
                    <div class="pt-2 w-1/12 bg-gray-100">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                    </div>
                    <input
                        type="text"
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="image url"
                        onChange={event => setImage(event.target.value)}
                    />
                    </div>
                    
                </div>
                </div>
            </div>

            <hr />

            <div class="w-full p-4 text-right text-gray-500">
            <Link to={{pathname: "/"}}>
                <button class="inline-flex items-center focus:outline-none mr-96">
                <svg
                    fill="none"
                    class="w-4 mr-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
                Return to Store
                </button>
                </Link>
                <button class=" focus:outline mr-10" onClick={async () => postToDB()}>
                Submit
                </button>
            </div>
            </div>
        </div>
    </section>
   )
}

export default Form;