import React, { useState } from 'react'
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"

const CreateNote = (props) => {

const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: " ",
        content: " ",

    });
        
    const InputEvent = (event) => {

      const {value, name } = event.target;

      setNote((prevData) => {
        return {
          ...prevData,
          [name] : value,
        }
      })
      console.log(note)
    }


    const addEvent = () => {
        props.passNote(note);
        setNote({
          title: " ",
          content: " ",
      });
    
    }

    const expandit = () => {
      setExpand(true)
    }
 


  return (
    <>
        <div className='main_note'>
            <form>

              {expand?  <input type="text" placeholder="kkkk" name="title" value={note.title} onChange={InputEvent}  autoComplete="off"/> : null} 

                <textarea rows=""  name='content' value={note.content} onChange={InputEvent} column="" placeholder='Write a note...' onClick={expandit}/>

                <Button onClick={addEvent}>
                    <AddIcon className='plus_sign'/>
                </Button>
                                
            </form>

        </div>
    </>
  )
}

export default CreateNote