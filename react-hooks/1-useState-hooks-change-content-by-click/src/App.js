import React, {useState} from 'react'

const App = () => {
  const[val, setVal] = useState('abhishek')

  const changeName = () => {
    setVal('kumar')
  }
  
  return (
    <>
      <div>
        <h1>{val} </h1>
        <button className='btn' onClick={changeName}>click me plz</button>
      </div>

    </>
  )
}

export default App