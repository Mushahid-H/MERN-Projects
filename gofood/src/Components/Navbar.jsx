import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('authtoken')
    navigate('/login')
  }

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link className='navbar-brand fs-1 fst-italic fw-bold' to='/'>
            GoFood
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>

              {localStorage.getItem('authtoken') ? (
                <li className='nav-item'>
                  <Link className='nav-link'>My Orders</Link>
                </li>
              ) : (
                ''
              )}
            </ul>

            {!localStorage.getItem('authtoken') ? (
              <div className='d-flex gap-1'>
                <Link className='btn btn-light' to='/login'>
                  Login
                </Link>

                <Link className='btn btn-light' to='/signup'>
                  Signup
                </Link>
              </div>
            ) : (
              <div className='d-flex gap-1'>
                <div className='btn btn-light'>My Cart</div>
                <div
                  className='btn btn-light text-danger'
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
