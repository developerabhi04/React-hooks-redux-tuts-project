import React, { useState } from 'react'

const App = () => {

  const [fullname, setfullname] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",

  });

  const eventchange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const {value, name} = event.target;
    

    setfullname((preValue)=>{
      if(name === 'fname'){
        return{
            fname: value,
            lname: preValue.lname,
            email: preValue.email,
            phone: preValue.phone,
          }
        }else if(name === 'lname'){
          return{
              fname: preValue.fname,
              lname: value,
              email: preValue.email,
            phone: preValue.phone,
          }
      }
      if(name === 'email'){
        return{
            fname: preValue.fname,
            lname: preValue.lname,
            email: value,
            phone: preValue.phone,
          }
        }else if(name === 'phone'){
          return{
              fname: preValue.fname,
              lname: preValue.lname,
              email: preValue.email,
              phone: value,
          }
      }

    })

  }



  const onSubmit = (event) => {
    event.preventDefault();
    alert("success");
    
  }

  

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <h1>Hello, {fullname.fname} {fullname.lname}</h1>
            <p>{fullname.email}</p>
            <p>{fullname.phone}</p>
            <input type='text' placeholder='Enter The First Name' name='fname' onChange={eventchange} value={fullname.fname}/>
            <input type='text' placeholder='Enter the Last Name' name='lname' onChange={eventchange} value={fullname.lname}/>
            <input type='email' placeholder='Enter the Email' name='email' onChange={eventchange} value={fullname.email}/>
            <input type='number' placeholder='Enter the Mobile Number' name='phone' onChange={eventchange} value={fullname.phone}/>
            <button type='submit'>Click Me</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App