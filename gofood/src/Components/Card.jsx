import React from 'react'

const Card = (props) => {
  const options = props.options

  const priceOptions = Object.keys(options)

  const handleAddtoCart = () => {}

  return (
    <div>
      <div className='card mt-3' style={{ maxHeight: '360px' }}>
        <img
          src={props.imgSrc}
          className='card-img-top overflow-hidden object-fit-cover'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>{props.name}</h5>
          <p className='card-text'>{props.des}</p>
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
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                )
              })}
            </select>

            <div className='d-inline fs-6 ms-1'>Total Price</div>

            <hr />

            <button
              className='btn btn-success text-white'
              onClick={handleAddtoCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
