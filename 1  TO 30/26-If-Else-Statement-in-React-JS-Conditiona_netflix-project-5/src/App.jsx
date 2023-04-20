import React from 'react'


import Netflix from './Netflix';
import Amozon from './Amozon';


const favSeries = "amozon";

const Fab = () => {
    if(favSeries === "netflix"){
        return <Netflix/>;
    }else{
        return <Amozon/>
    }

}




const App = () => {
  return (
    <>

        <h1 className="heading_style">List of Top 4 netflix Series in 2023</h1>
        {/* {Sdata.map((value)=>{
            return (
                <Card
                key= {value.id}
                imgsrc= {value.imgsrc}
                title= {value.title}
                sname= {value.sname}
                link= {value.link}
                />
            )
        })} */}
        <Fab/>
    
    </>
  )
}

export default App