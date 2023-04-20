import React, { useState } from "react";



const Hooks = () => {
  let newTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  }

 
 
  return (
    <>  
        <div >
       <h1> {ctime} </h1>
       <button onClick={UpdateTime}> Click Me </button>
       </div>
        
    </>
  )
}

export default Hooks;