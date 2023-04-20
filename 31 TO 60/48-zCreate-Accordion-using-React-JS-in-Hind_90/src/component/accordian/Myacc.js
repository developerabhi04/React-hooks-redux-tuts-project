import React, { useState } from 'react'

const Myacc = ({question, answer}) => {
    const [show, setShow] = useState(false)

    const onClick = () => {
        setShow(!show)
    }

  return (
    <>
        {/* <h1>{question}</h1>
        <p>{answer}</p> */}
        <div className='main-heading'>
            <p onClick={onClick}> {show? "➖" : "➕"}</p>
            <h3>{question}</h3>
        </div>
        { show && <p className='answers'>{ answer }</p> }
        
    </>
  )
}

export default Myacc