import React, {useEffect, useState} from 'react';
import Counter from "./Counter"

function List(props) {

    const [item, setItem] = useState([])

    useEffect(() => {
        async function getItems() {
            let response = await fetch('http://localhost:3000/item/get')
            response = await response.json()
            setItem(response)
        }
        getItems()
    })

    var itemList = []
    item.forEach((element, index) => {
        itemList.push(
            <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src={`${element.image}?format=1500w&content-type=image%2Fjpeg&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60`} alt=""/>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                        {element.name}
                        </div>
                    </div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{element.description}</div>
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        ${element.price}/lb
                        </span>
                    </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Counter item={item} amount={props.amount[index]} setAmount={props.setAmount} amountArr={props.amount} i={index} total={props.total} setTotal={props.setTotal} rate={element.price}></Counter>
                </td>
            </tr>
        )
    })

    return (
    <div class="flex flex-col">
        <h1 class="font-sans m-10 text-5xl">Puzzl Store</h1>
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:mx-96">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                    </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    {itemList}
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
    );
}

export default List;