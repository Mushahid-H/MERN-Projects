import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='container-fluid bg-dark'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mx-md-5 mx-2 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <span className='text-light'>© 2024 GoFood, Inc</span>
        </div>

        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <Link className='text-light' to='linkedin.com'>
              <i className='fa fa-linkedin' aria-hidden='true'></i>
            </Link>
          </li>
          <li className='ms-3'>
            <Link className='text-light' to='facebook.com'>
              <i className='fa fa-facebook-official' aria-hidden='true'></i>
            </Link>
          </li>
          <li className='ms-3'>
            <Link className='text-light' to='instagram.com'>
              <i className='fa fa-instagram' aria-hidden='true'></i>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
