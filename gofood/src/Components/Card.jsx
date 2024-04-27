import React from 'react'

const Card = () => {
  return (
    <div>
      <div className='card mt-3' style={{ maxHeight: '360px' }}>
        <img
          src='https://i.pinimg.com/474x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg'
          className='card-img-top overflow-hidden object-fit-cover'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            Some quick example text to build on the card
          </p>
          <div className='container'>
            <select className='m-2 p-1'>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                )
              })}
            </select>
            <select className='p-1'>
              <option value='half'>Half</option>
              <option value='full'>Full</option>
            </select>

            <div className='d-inline fs-6 ms-1'>Total Price</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
