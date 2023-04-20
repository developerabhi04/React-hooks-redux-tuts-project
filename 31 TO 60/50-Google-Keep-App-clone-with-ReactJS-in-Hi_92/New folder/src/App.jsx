import React, { useState } from 'react'
import Header from './components/Header'
import CreateNote from './components/CreateNote'
import Footer from './components/Footer'
import Note from './components/Note'

const App = () => {
    const [additems, setitems] = useState([]);

    const addInput = (input) => {
        // alert("i m clicked")

        setitems((prevData) => {
            return[...prevData, input]
        })      
    console.log(input);
    }

    const deleteItems = (id) => {
        setitems((oldData)=>{
            return oldData.filter((curr, index)=>{
                return index !== id;
            })
        })
    }

  return (
    <>
        <Header/>
        <CreateNote  passInput={addInput}/>
        
            {additems.map((val, index)=>{
                return(
                    <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    delete={deleteItems}
                    />

                )
            })

            }

        <Footer/>
    </>
  )
}

export default App