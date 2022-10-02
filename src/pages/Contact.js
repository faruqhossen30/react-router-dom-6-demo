import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <div className="row">
        <h2 className='py-3'>Contact Us</h2>
        <div className="col">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className='btn btn-primary btn-sm'>Send Messsage</button>
        </div>
      </div>
    </div>
  )
}

export default Contact