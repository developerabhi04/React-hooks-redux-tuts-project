import React from 'react';
import Card from './Card';
import Sdata from './Sdata';



const Amozon = () => {
  return (
            <Card
            key= {Sdata[3].id}
            imgsrc= {Sdata[3].imgsrc}
            title= {Sdata[3].title}
            sname= {Sdata[3].sname}
            link= {Sdata[3].link}
            />
  )
}

export default Amozon;