import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home';
import { Route, Routes,  Navigate} from 'react-router-dom'
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/service" element={<Services/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App