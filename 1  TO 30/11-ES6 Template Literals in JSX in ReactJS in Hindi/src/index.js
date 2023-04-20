import React from "react";
import ReactDOM  from "react-dom";



const myName = "abhishek";
const  lname = "kumar";


ReactDOM.render(
    <>
        <h1>
            {/* hello my name is {myName} {lname}  */}
            {/* hello my name is {myName + lname} */}
            {/* hello my name is {myName + " " + lname} */}
            {`hello my name is ${myName} ${lname} and my age is ${20+6}`}
        </h1>

        <p>my lucky number is {5+2}</p>       
    </>,
    document.getElementById('root')
);