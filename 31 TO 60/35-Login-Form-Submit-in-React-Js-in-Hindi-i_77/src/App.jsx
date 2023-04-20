import React, { useState } from "react";



const App = () => {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [lfullname, setLfullname] = useState("");
  const [fullname, setFullname] = useState();


  const onSubmit = (event) => {
    event.preventDefault();
    setFullname(name)
    setLfullname(lastname)
  }


  const inputEvent = (event) => {
    // console.log(event.target.value);
    setName(event.target.value)
  }

  const inputEventTwo = (event) => {
    setLastname(event.target.value)
  }

 
  return(
     <>
        <div className="main_div">
          <form onSubmit={onSubmit}>
            <div>
          <h1> Hello {fullname} {lfullname}</h1>
          <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}/>
          <input type="text" placeholder="Enter Your Last Name" onChange={inputEventTwo} value={lastname}/>

          <button type="submit" > Click Me</button>
          </div>
          </form>
        </div>
        
     </>
  )
}

export default App;