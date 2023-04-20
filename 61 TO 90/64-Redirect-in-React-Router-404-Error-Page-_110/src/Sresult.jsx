import React from 'react'

const Sresult = (props) => {

    const imgs = `https://source.unsplash.com/collection/928423/480x480?${props.name}`
  return (
    <>
        <div>
            <img src={imgs} alt='abh'/>
        </div>
    </>
  )
}

export default Sresult