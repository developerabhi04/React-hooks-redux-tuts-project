import React, { useState } from 'react';


const increse = {
    textAlign: "center",
    margin: "419px",
    fontSize: "27px"
}


const App  = () => {
  // const state = useState();
  // console.log(state);
  
  const [count, setCount] = useState(0)



  const IncNum = () => {
    setCount(count + 1);
    // console.log('clicked' + count++);
  }
  

  return (
    <>
      <div style={increse}>
       <h1> {count} </h1>
       <button onClick={IncNum}> Click Me </button>
       </div>
    </>
  );
}

export default App;