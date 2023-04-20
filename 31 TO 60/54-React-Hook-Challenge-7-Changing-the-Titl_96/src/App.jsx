import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0);


  useEffect(() => {
    // alert("click me")
    document.title=`you clicked me ${num} times`
  })

  return (
    <>
      <button
        onClick={() => {
          setnum(num+1)
        }}
      >
        click me {num}
      </button>

       

    </>
  )
}

export default App