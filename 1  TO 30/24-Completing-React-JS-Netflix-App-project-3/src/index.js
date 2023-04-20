import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css"
import Card from "./Card";
import Sdata from "./Sdata";

// const ncard = (val, index, arr) =>{
//     return(
//         <Card
//         imgsrc= {val.imgsrc}
//         title= {val.title}
//         sname = {val.sname}
//         link= {val.link}
//         />
//     )
// }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
       <h1 className="heading_style"> List of Top 4 netflix Series in 2023</h1>
       
       {Sdata.map((val, index) => {
        // console.log(index);
        return (
          <Card
            imgsrc= {val.imgsrc}
            title= {val.title}
            sname = {val.sname}
            link= {val.link}
          />

        )
       })}
    </>
)

// "props" (which stands properties)
// React Props are like function argument in javaScript and attributes in html

// function myname(a, b){
//     return a+b;
// }

// const myname = (a,b) => a+b;