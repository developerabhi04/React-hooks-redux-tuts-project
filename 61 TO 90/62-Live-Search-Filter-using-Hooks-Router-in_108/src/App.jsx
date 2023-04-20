import React from 'react'
import About from './About'
import { Routes, Route} from "react-router-dom";
import Contact from './Contact'
import Services from './Services'
import Home from './Home';
import Error from './Error'
import User from './User';
import Search from './Search';

const App = () => {
  return (
    <>
        <Home/>
        <Routes>
            <Route path="" element={<About  name="Abhishek" /> }/>
            <Route path="/service" element={<Services/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path='/user/:name/:lname' element={<User/>}/>
            <Route path="*" element={<Error/>}/>

        </Routes>

        
    
    </>
  )
}

export default App