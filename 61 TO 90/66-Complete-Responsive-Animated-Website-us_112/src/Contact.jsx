import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({
    name:"",
    phone:"",
    email:"",
    message:""
  });

  const InputEvent = (event) => {
    const {name, value}= event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name] : value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.name}. My mobile number is ${data.phone}. My email id is ${data.email}. Here, What I want to say ${data.message} `
      )
  }


  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                  <input type="text" className="form-control" name='name' value={data.name} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                  <input type="number"  className="form-control" name='phone' value={data.phone} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter Your Phone Number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                  <input type="email"  className="form-control" name='email' value={data.email} onChange={InputEvent} id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                  <textarea className="form-control" name='message' value={data.message} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="col-12">
                  <button className='btn btn-outline-primary' type="submit" >Submit form</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact