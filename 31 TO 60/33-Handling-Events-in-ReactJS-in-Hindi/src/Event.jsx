import React, { useState } from 'react'



const Event = () => {
  const bgs = "#8e44ad";

  const [bgcol, setbg] = useState(bgs);
  const [name, setName] = useState("Click me");

 

  const bgChange = () => {
    // console.log("clicked");
    let newbg = "#34495e";
    setbg(newbg)
    setName("travel to next color 😄")
  }

  const bgBack = () => {
    setbg(bgs);
    setName("Ayooo !! 👍")
  }

  return (
    <>
       <div style={{ backgroundColor: bgcol }}>
          {/* <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button> */}
          <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
       
       </div>
    </>
  )
}

export default Event