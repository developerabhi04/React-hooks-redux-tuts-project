import React, { useState } from 'react'

const App = () => {

  const [fullname, setfullname] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    qualification: "",
  });

  const eventchange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const {name, value} = event.target;
    
    setfullname((preValue)=>{
      console.log(preValue);

          return{
              ...preValue,
              [name]: value,    
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
            <p>{fullname.qualification}</p>
            <input type='text' placeholder='Enter The First Name' name='fname' onChange={eventchange} value={fullname.fname}/>
            <input type='text' placeholder='Enter the Last Name' name='lname' onChange={eventchange} value={fullname.lname}/>
            <input type='email' placeholder='Enter the Email' name='email' onChange={eventchange} value={fullname.email}/>
            <input type='number' placeholder='Enter the Mobile Number' name='phone' onChange={eventchange} value={fullname.phone}/>
            <input type='text' placeholder='Enter Your Qualification' name='qualification' onChange={eventchange} value={fullname.qualification}/>
            <button type='submit'>Click Me</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App;



// using spread operator
// const array = ["abhishek", "kumar"];

// const allArray = [26,...array]
// console.log(allArray);

// console.log(array);


// var shootGame = ["cod", "pubg", "freefire"];
// var [first, ...remaining] = shootGame;
// console.log(first);
// console.log(remaining);



// how to spread one object to another object
// const fullname = {
//   fname: "abhishek",
//   lname: "kumar"
// }

// const biodata = {
//   id : 1,
//   ...fullname,
//   age: 26,
//   gender: "male",
// }
// console.log(biodata);