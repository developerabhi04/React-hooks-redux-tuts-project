import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false)

    const [input, setInput] = useState({
        title:"",
        content:"",
    })

    const InputEvent = (event) => {
       
        const {value, name} = event.target;

        setInput((prevData) => {
            return{
                ...prevData,
                [name]: value,
            }
        })
        console.log(input);
    }


    const expandit = () => {
        setExpand(true)
    }



    const addEvent = () => {
        props.passInput(input);
        setInput ({
            title:"",
            content:"",
        })

    }



  return (
    <>
        <div className="main_note">
            <form>

               {expand?  <input type='text' placeholder='Title' name='title' onChange={InputEvent} value={input.title} />  : null}
                <textarea rows="" column="" placeholder='Write a note...' name='content' onChange={InputEvent} value={input.content} onClick={expandit} />
                
                <Button onClick={addEvent}>
                    <AddIcon className='plus_sign'/>
                </Button>

            </form>
        </div>
    </>
  )
}

export default CreateNote