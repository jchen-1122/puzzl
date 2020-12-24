import React, {useState} from 'react';

function Proceed(props) {
    return (
    <div class="px-96 p-5">
        <div class="items-center p-4 bg-green-200 rounded-lg shadow-xs cursor-pointer hover:bg-green-500 hover:text-gray-100">
            <div>
            <p class=" text-xs font-medium ml-2 ">
                {props.text}
            </p>
            
            </div>
        </div>
    </div>
    );
}

export default Proceed;