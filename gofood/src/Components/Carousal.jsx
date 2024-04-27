import React from 'react'
import bf from '../assets/bf.jpg'
import chicken from '../assets/chickern.jpg'
import lunch from '../assets/lunch.jpg'

const Carousal = () => {
  return (
    <div>
      <div
        id='carouselExampleControls'
        className='carousel slide carousel-fade '
        data-bs-ride='carousel'
      >
        <div className='carousel-inner' style={{ maxHeight: '500px' }}>
          <div className='carousel-caption' style={{ zIndex: '10 ' }}>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
          <div className='carousel-item active'>
            <img
              src='https://source.unsplash.com/random/900x700/?burger'
              className='d-block h-50 w-100'
              style={{ filter: 'brightness(30%)', objectFit: 'contain' }}
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://source.unsplash.com/random/900x700/?polao'
              className='d-block w-100'
              style={{ filter: 'brightness(30%)', objectFit: 'contain' }}
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://source.unsplash.com/random/900x700/?karahi'
              className='d-block w-100'
              style={{ filter: 'brightness(30%)', objectFit: 'contain' }}
              alt='...'
            />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousal
