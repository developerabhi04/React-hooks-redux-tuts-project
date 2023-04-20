import React from 'react'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Menu from './Menu'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  const Name = () => {
    return(<h1> hi this is name</h1>)
  }


  return (
    <>
      <Menu/>
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/contact/name' element={<Name/>} />
        <Route path='*' element={<Error/>} />
      </Routes>

      {/* // <About />
      // <Contact/>
      // <Error/> */}
    </>
  )
}

export default App