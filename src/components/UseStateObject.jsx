import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';

function UseStateObject() {
    const [person, setperson] = useState({
        firstName:'guru',
        lastName:'k'
    })

    const updateFirstName=()=>{
        // console.log('first name:',person.firstName);
        // console.log('last name:',person.lastName);

        // INVALID
        // person.firstName='kiran'
        // setperson(person)

        // VALID
        // compulsory. copy all d values,then changing required values
        // setperson({
        //     ...person, 
        //     firstName:'kiran'
        // })
        // OR
        const personCopy={...person}
        personCopy.firstName='kiran'
        setperson(personCopy)
    }

    useEffect(()=>{
        console.log('person is changed');
    },[person])
    
    return (
        <div>
            <p>Full name : {person.firstName} {person.lastName}</p>
            <button onClick={updateFirstName}>Update first Name</button>
        </div>
    )
}

export default UseStateObject
