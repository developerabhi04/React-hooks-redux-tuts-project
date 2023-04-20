import React, { useState } from "react";



const Hooks = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const updatedtime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time)

  }


   setInterval(updatedtime, 1000)
  

  return (
    <>   
       <h1> {ctime} </h1>
        
    </>
  )
}

export default Hooks;