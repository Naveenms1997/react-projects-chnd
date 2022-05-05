import React,{useEffect , useState} from 'react'

function UseStatePrimitive(){

    const [userName, setuserName] = useState('')
    const [count, setcount] = useState(0)
    const [countf, setcountf] = useState(0)

    // ---------------------------------------------------------------------
    const updateName=()=>{
        console.log('updateName func called');
        setuserName('guru')
    }

    const updateCount=()=>{
        console.log('updateCount func called');
        setcount(count+5)
    }

    const updateCountf=()=>{
        console.log('updateCount f func called');
        setcountf(22)
    }
    // ---------------------------------------------------------------------
// if the value of dependency is changed the below useEffect will get executed (w:r:t primitiva type)
    useEffect(()=>{
        if (userName!=='')
        console.log('username is changed');
    },[userName])

    useEffect(()=>{
        if (count!==0)
        console.log('count is changed');
    },[count])

    useEffect(()=>{
        if (countf!==0)
        console.log('countf is changed');
    },[countf])
    // ---------------------------------------------------------------------

    return(
        <div>
            {console.log('UseStatePrimitive return executed')}
            <p>user name : {userName}</p>
            <button onClick={updateName}>Update name</button>

            <p>Count : {count}</p>
            <button onClick={updateCount}>Update count</button>

            <p>Count fix : {countf}</p>
            <button onClick={updateCountf}>Update count fix</button>
        </div>
    )
}

export default React.memo(UseStatePrimitive)