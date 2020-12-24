import React, {useState, useEffect} from 'react';

function Test(props) {
    console.log(props.amount)
    const item = props.item

    var itemList = []
    item.forEach((element, index) => {
        if (props.amount[index] != 0) {
            itemList.push(
                <li>
                    <a class="block hover:bg-gray-50">
                        <div class="px-4 py-4 sm:px-6">
                        <div class="flex items-center justify-between">
                            <p class="text-sm font-thin text-gray-700 truncate">
                            {element.name}
                            </p>
                            <div class="ml-2 flex-shrink-0 flex">
                            <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Subtotal: ${props.amount[index]}
                            </p>
                            </div>
                        </div>
                        <div class="mt-2 sm:flex sm:justify-between">
                            <div class="sm:flex">
                            <p class="flex items-center text-sm font-light text-gray-500">
                                <time datetime="2020-01-07">{props.amount[index] / item[index]["price"]} lbs @ ${item[index]["price"]}/lb</time>
                            </p>
                            </div>
                        </div>
                        </div>
                    </a>
                </li>
            )
        }
    })

    return (
          <body>
            <div class="bg-indigo-700 px-4 py-5 border-b rounded-t sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-white">
                Your Shopping List
              </h3>
            </div>
            <div class="bg-white shadow overflow-hidden sm:rounded-md m-10">
              <ul class="divide-y divide-gray-200">
                {itemList}
              </ul>
            </div>
          </body>
    
    );
}

export default Test;