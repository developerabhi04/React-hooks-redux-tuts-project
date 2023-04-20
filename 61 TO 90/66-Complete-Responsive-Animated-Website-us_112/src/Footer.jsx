import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <>
        <footer className='text-center'>
            <p> ©️ {year} Abhishek. All Right Reserved || Terms and Condition.</p>
        </footer>
    </>
  )
}

export default Footer