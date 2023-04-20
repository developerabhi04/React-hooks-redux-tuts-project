import React from 'react'
import add,{sub, mult, div} from "./Cal";


const App = () => {
  return (
    
      <>
        <ul>
            <li>sum of two no is {add(40,4)}</li>
            <li>substract of two no is {sub(40,4)}</li>
            <li>multiplication {mult(40,4)}</li>
            <li>{div(40,3)}</li>
        </ul>
    </>
      
   
  )
}


export default App;
