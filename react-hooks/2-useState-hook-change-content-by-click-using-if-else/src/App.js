import React, {useState} from 'react'

const App = () => {
  const[myName, setmyName] = useState('abhishek')

  const changeName = () => {

    let value = myName;
    
    if(value === 'abhishek') {
      setmyName('kumar')
    } else {
      setmyName('abhishek')
    }
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