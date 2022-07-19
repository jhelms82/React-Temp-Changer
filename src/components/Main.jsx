import React, { useState } from 'react'

export default function Main() {
    const [count, setCount] = useState(50)
    const [tempColor, setTempColor] = useState("neutral")

    function add() {
        const newTemp = count + 1
        if (newTemp > 75) {
            setTempColor("hot")
        }
        else if (newTemp < 32) {
            setTempColor("cold")
        }
        else {
            setTempColor('neutral')
        }
        setCount(newTemp)
    }

    function minus() {
        const newTemp = count - 1
        if (newTemp < 32) {
            setTempColor("cold")
        }
        else if (newTemp > 75) {
            setTempColor("hot")

        }
        else {
            setTempColor("neutral")
        }
        setCount(newTemp)
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={minus}>–</button>
            <div className={`counter--count ${tempColor}`}>
                <h1>{count} F</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}