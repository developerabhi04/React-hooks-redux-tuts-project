import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Todolist = (props) => {

    const [num, setNum] = useState(1);

    const incNum = () => {
        setNum(num+1)
    }

    const decNum = () => {
        if(num > 0){
            setNum(num-1)
        }else{
            alert("Sorry 🤵 you have to add at least one item")
            setNum(0)
        }
        
    }

  return (
    <>
        <div className='div_main'>
            <div className="div_card">
                <h1> {num} </h1>
                <div className='btn_div'>
                <Tooltip title="Add">
                     <Button onClick={incNum}>  
                     <AddIcon/>
                     </Button>
                     </Tooltip>
                     
                     <button onClick={decNum}> 
                     <RemoveIcon/> 
                     </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todolist