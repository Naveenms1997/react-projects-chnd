import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'

function UseStateArray() {
    const [hobbies, sethobbies] = useState([])

    const addHobby=()=>{
        //wrong way
        // hobbies.push('cricket')
        // sethobbies(hobbies)

        // first way
        // sethobbies([...hobbies,'cricket'])

        // second way & BEST WAY
        const hobbiesCopy=[...hobbies]
        hobbiesCopy.push('cricket')
        sethobbies(hobbiesCopy)

        // third way
        // const hobbiesCopy= hobbies.slice(0)
        // hobbiesCopy.push('cricket')
        // sethobbies(hobbiesCopy)

    }

    useEffect(()=>{
        console.log('hobbies is changed');
    },[hobbies])

    return (
        <div>
            <button onClick={addHobby}>Add Hobby</button>
            {hobbies.map((hobby,index)=>{
                return <p key={index}>{hobby}</p>
            })}
        </div>
    )
}

export default UseStateArray
