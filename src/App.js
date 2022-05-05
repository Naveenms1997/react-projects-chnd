import {useState} from 'react'
import './App.css';
import { PureClassComponent } from './components/PureClassCoponent';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import UseStatePrimitive from './components/UseStatePrimitive';

function App() {

  const [isAdmin , setisAdmin ] = useState(false)


  return (
    <div className="App">
      <p>{isAdmin ? 'admin' : 'user'}</p>
      <button onClick={()=>{
        setisAdmin(!isAdmin)
      }}>Update admin</button> 
      <hr/>

      {/* <UseStatePrimitive/> */}
      {/* <PureClassComponent/> */}
      <UseStateObject/>
      {/* <UseStateArray/> */}
    </div>
  );
}

export default App;
