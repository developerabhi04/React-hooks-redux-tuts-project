import React, { useState } from 'react';
import { questions } from './api';
import "./style.css";
import Myacc from './Myacc';

const Accod = () => {
    const [data, setData] = useState(questions);


  return (
    <>
        <section className='main-div'>
            <h1>React Interview Question</h1>
        
        {
            data.map((curElem) => {
                const { id } = curElem
                return <Myacc key={ id} {...curElem} />
               
            })
        }

        </section>
    </>
  )
}

export default Accod;