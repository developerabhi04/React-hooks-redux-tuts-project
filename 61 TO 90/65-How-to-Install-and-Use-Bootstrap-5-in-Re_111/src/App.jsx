import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <div className='container'>
          <h1 className='text-center'> hi this is Abhishek </h1>
        <br/>
        <div className='text-center'>
        <div class="card" style={{width: "18rem" }}>
          <img src="https://picsum.photos/seed/picsum/200/150" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-outline-success">Go somewhere</a>
          </div>
        </div>
          <button className='btn btn-outline-success' >Welcome to you</button>
        </div>
      </div>
    </>
  )
}

export default App