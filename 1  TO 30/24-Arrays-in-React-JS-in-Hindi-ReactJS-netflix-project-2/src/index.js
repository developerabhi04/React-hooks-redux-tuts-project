import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css"
import Card from "./Card";
import Sdata from "./Sdata";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>

    <h1 className="heading_style"> List of Top 4 netflix Series in 2023</h1>


    <Card
    imgsrc= {Sdata[0].imgsrc}
    title= {Sdata[0].title}
    sname = {Sdata[0].sname}
    link= {Sdata[0].link}
    />

    <Card
    imgsrc= {Sdata[1].imgsrc}
    title= {Sdata[1].title}
    sname = {Sdata[1].sname}
    link= {Sdata[1].link}
    />

    <Card
    imgsrc= {Sdata[2].imgsrc}
    title= {Sdata[2].title}
    sname = {Sdata[2].sname}
    link= {Sdata[2].link}
    />

    <Card
    imgsrc= {Sdata[3].imgsrc}
    title= {Sdata[3].title}
    sname = {Sdata[3].sname}
    link= {Sdata[3].link}
    />

    
    </>
)

// "props" (which stands properties)
// React Props are like function argument in javaScript and attributes in html