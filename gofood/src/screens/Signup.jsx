import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: '',
    name: '',
    password: '',
    location: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    })
    const json = await response.json()

    if (!json.success) {
      alert('Enter valid credentials')
    } else {
      navigate('/login')
    }
  }

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className='container w-50 text-light vh-100 d-flex'>
        <form
          onSubmit={handleSubmit}
          className='d-flex bg-dark justify-content-center flex-column p-5 mx-auto my-auto align-items-center rounded'
        >
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              aria-describedby='emailHelp'
              name='name'
              value={credentials.name}
              onChange={onchange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              name='email'
              value={credentials.email}
              onChange={onchange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={credentials.password}
              onChange={onchange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Address' className='form-label'>
              Address
            </label>
            <input
              type='text'
              className='form-control'
              id='address'
              name='location'
              value={credentials.location}
              onChange={onchange}
            />
          </div>

          <button type='submit' className='btn btn-primary mb-3'>
            Register
          </button>
          <Link to='/login' className='btn btn-outline-danger'>
            Alrady a user
          </Link>
        </form>
      </div>
    </>
  )
}

export default Signup
