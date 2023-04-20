import React from "react";
import ReactDOM  from "react-dom";



const myName = "abhishek"


ReactDOM.render(
    <>
        <h1>hello my name is {myName}</h1>
        <p>my lucky number is {5+2}</p>       
    </>,
    document.getElementById('root')
);