import React from "react";
import ReactDOM from "react-dom";
import "./index.css";



const name = "Abhishek";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const img4 = "https://picsum.photos/280/300";
const link = "https://www.google.com"

ReactDOM.render(
    <>
        <h1 className="heading">My name is {name}</h1>
        <div className="imgs">
        <img src={img1} alt="randomImg" />
        <img src={img2} alt="randomImg" />
        <img src={img3} alt="randomImg" />
        <a href={link} target="_abhi">
            <img src={img4} alt="randomImg" />
        </a>
        </div>
    
    </>,
    document.getElementById('root')

);




// react fragment  syntatic sugarcan form