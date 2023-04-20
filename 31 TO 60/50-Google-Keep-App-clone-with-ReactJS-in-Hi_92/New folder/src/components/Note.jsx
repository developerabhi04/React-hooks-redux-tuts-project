 import React from 'react'
 import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
 
 const Note = (props) => {

    const deletekeep = () => {
        props.delete(props.id)
    }

   return (
     <>
        <div className='note'>
            <h1> {props.title} </h1>
            <br/>
            <p> {props.content} </p>
            <button className='btn' onClick={deletekeep}>
                <DeleteForeverIcon className="deleteIcon"/>
            </button>

        </div>
     </>
   )
 }
 
 export default Note