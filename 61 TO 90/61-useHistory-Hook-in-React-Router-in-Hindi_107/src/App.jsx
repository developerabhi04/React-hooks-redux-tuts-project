import React from 'react'
import {Routes, Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Services from './Services';
import User from './User';


const App = () => {
  return (
    <>
        <Home/>
        <Routes>
            <Route exact path='/' element={<About name="About" />}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact names="contact" />} />
            <Route path='/user/:fname/:lname' element={<User/>} />
            <Route path='*' element={<Error/>}/>
        </Routes>

    </>
  )
}

export default App