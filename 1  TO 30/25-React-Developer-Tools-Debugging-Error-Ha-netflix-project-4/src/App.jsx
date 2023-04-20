import React from "react";

import Card from "./Card";
import Sdata from "./Sdata";



const App = () => {
  return(
    <>
       <h1 className="heading_style"> List of Top 4 netflix Series in 2023</h1>
       
       {Sdata.map((val) => {
        // console.log(index);
        return (
          <Card
            key= {val.id}
            imgsrc= {val.imgsrc}
            title= {val.title}
            sname = {val.sname}
            link= {val.link}
          />

        )
       })}
    </>
  )
  
}

export default App;