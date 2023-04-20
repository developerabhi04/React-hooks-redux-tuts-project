import React from 'react';
import Comman from './Comman';
import web from "./gg.jpg"

const About = () => {
  return (
    <>
       <Comman name='Welcome to About page' imgsrc={web} visit="/contact" btname="Contact Now" />
    </>
  )
}

export default About