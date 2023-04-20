import React, {useState} from 'react'

const App = () => {
  const[myName, setmyName] = useState('abhishek')

  const changeName = () => {

    let value = myName;
    
    (value === 'abhishek') ?
      setmyName('kumar') : setmyName('abhishek')
    
  }
  
  return (
    <>
      <div>
        <h1>{myName} </h1>
        <button className='btn' onClick={changeName}>click me plz</button>
      </div>

    </>
  )
}

export default App