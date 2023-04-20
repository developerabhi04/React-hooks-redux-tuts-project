import React, { useState } from 'react'

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
                     <button onClick={incNum}> + </button>
                     <button onClick={decNum}> - </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todolist