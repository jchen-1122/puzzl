import React, {useEffect, useState} from 'react';

function Counter(props) {
    const [amount, setAmount] = useState(props.amount)
    useEffect(() => {
        update()
    }, [amount])

    useEffect(() => {
        // var temp = amountArr
        // temp[props.i] = amount * (props.item[props.i]["price"])
        console.log(props.amountArr)
        props.setTotal(props.total)
    }, [amount])

    const increment = () => {
        setAmount(amount + 1)
    }

    const decrement = () => {
        if (amount > 0) {
            setAmount(amount - 1)
        }
    }

    const update = () => {
        const i = props.i
        const setAmount = props.setAmount
        const amountArr = props.amountArr
        var temp = amountArr
        temp[i] = amount * (props.item[i]["price"])
        setAmount(temp)
    }


    return (
    <div class="custom-number-input h-10 w-32">
        <div class="flex flex-row h-7 w-full rounded-lg relative bg-transparent mt-1">
            <button data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" onClick={() => decrement()}>
                <span class="m-auto text-1xl font-thin">−</span>
            </button>
            <p class="mx-5 ">{amount}</p>
            <button data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" onClick={() => increment()}>
                <span class="m-auto text-1xl font-thin">+</span>
            </button>
        </div>
    </div>

    
    );
}

export default Counter;