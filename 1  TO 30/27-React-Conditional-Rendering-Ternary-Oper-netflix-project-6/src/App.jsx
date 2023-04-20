import React from 'react'

import Netflix from './Netflix';
import Amozon from './Amozon';


const favSeries = "netflix";

// const Fav = () => {
//     if (favSeries === "netflix") {
//         return <Netflix/>    
//     } else {
//         return <Amozon/>   
//     }
// }


const App = () => {
  return (
    <>
        <h1 className="heading_style">List of Top 4 netflix Series in 2023</h1>
        {/* <Fav /> */}

        { (favSeries === "netflix") ? <Netflix/> : <Amozon/>}
    </>
  )
}

export default App



// ternary operator

// syntax
// condition ? expiftrue : expressioniffalse

// parameters
// conditions
// An expression whose value is used as a condition. 

// expressioniftrue
// An expression which is evaluated if the condition evalutes to a truthy value
// (one which equals or can be converted to true.)

// expressioniffalse
// An expression which is executed if the condition is falsy
// (that is has a value which can be converted to false).



