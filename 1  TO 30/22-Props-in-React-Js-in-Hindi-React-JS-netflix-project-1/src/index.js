import React from "react";
import ReactDOM from 'react-dom/client';

import Card from "./Card";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <Card
    imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
    title="A netflix Orginal Series"
    sname = 'Dark'
    link="https://www.netflix.com/in/title/80990668?source=35"
    />

    <Card
    imgsrc="https://wallpapercave.com/dwp2x/wp11321516.jpg"
    title="Extra curricular"
    sname = 'Dark 2'
    link="https://www.netflix.com/in/title/80990668?source=35"
    />

    <Card
    imgsrc="https://wallpapercave.com/wp/wp11784162.jpg"
    title="A netflix Orginal Series"
    sname = 'Wednesday '
    link="https://www.netflix.com/in/title/80990668?source=35"
    
    />
    </>
)

// "props" (which stands properties)
// React Props are like function argument in javaScript and attributes in html