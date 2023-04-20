import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
        <h1> Hi this is Error page, Page not Found 404! </h1>
        <NavLink to="/">go back</NavLink>
    </>
  )
}

export default Error