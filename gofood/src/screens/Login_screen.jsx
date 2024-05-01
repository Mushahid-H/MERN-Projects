import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login_screen = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: '',

    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
    const json = await response.json()

    if (!json.success) {
      alert('Enter valid credentials')
    }
    if (json.success) {
      localStorage.setItem('authtoken', json.authtoken)
      console.log(localStorage.getItem('authtoken'))
      navigate('/')
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

          <button type='submit' className='btn btn-primary mb-3'>
            Login
          </button>
          <Link to='/signup' className='btn btn-outline-danger'>
            Not a user, sign up
          </Link>
        </form>
      </div>
    </>
  )
}

export default Login_screen
