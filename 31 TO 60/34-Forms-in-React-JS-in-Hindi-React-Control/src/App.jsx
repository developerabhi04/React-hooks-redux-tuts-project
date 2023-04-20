import React, { useState } from "react";



const App = () => {

  const [name, setName] = useState("")
  const [fullname, setFullname] = useState()


  const inputEvent = (event) => {
    // console.log(event.target.value);
    setName(event.target.value)
  }

  const onSubmit = () => {
    setFullname(name)
  }
  
  return(
     <>
        <div>
          <h1> Hello {fullname} </h1>
          <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}/>
          <button onClick={onSubmit}> Click Me</button>
        </div>
     </>
  )
}

export default App;