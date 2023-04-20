import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [fullName, SetFullName] = useState({
    fname: '',
    lname: '',
  }) 


 

  const inputevent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    // console.log(event.target.placeholder);

    const value = event.target.value;
    const name = event.target.name;

    SetFullName((preValue)=>{
      // console.log(preValue);
      if(name === "fname"){
        return{
          fname: value,
          lname: preValue.lname,
        }
      }else if(name === "lname"){
        return{
          fname: preValue.fname,
          lname: value,
        }
      }

      
    })
    
  }

  const onsubmit = (event) => {
    event.preventDefault()
    alert("form submitted")
  }



  return (
    <>
      <div>
        <form onsubmit={onsubmit}>
          <div>
            <h1>hello, {fullName.fname} {fullName.lname}</h1>
            <input type='text' placeholder='Enter the First name' name='fname' onChange={inputevent} value={fullName.fname}/>
            <input type='text' placeholder='Enter the First name' name='lname' onChange={inputevent} value={fullName.lname}/>
            <button type='submit' >click me</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App;