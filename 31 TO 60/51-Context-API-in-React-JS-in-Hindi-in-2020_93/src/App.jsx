import React, { createContext } from 'react'
import ComA from './ComA'


const FirstName = createContext();
const LastName = createContext();


const App = () => {
  return (
    <>
       
      <FirstName.Provider value={"abhishek"}> 
        <LastName.Provider value={"kumar"}>
           <ComA />
        </LastName.Provider>
      </FirstName.Provider>
      

    </>

  )
}

export default App;
export { FirstName, LastName };



// createContext()

// provider

// consumer

// so, React Hooks provides a concept call Context.

// React Context API allows you to easily access data at
// different levels of the component tree,
// without passing props to every level