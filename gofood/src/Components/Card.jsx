import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useCart } from './ContextReducer'

const Card = (props) => {
  let data = useCart()
  let dispatch = useDispatch()
  const priceRef = useRef()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState('')
  const options = props.options

  const priceOptions = Object.keys(options)

  let finalPrice = qty * parseInt(options[size])

  const foodItem = props.foodItems

  const handleAddtoCart = async () => {
    let food = []

    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item
        break
      }
    }
    if (food) {
      console.log('hello')
      if (food.size === size) {
        await dispatch({
          type: 'UPDATE',
          id: foodItem._id,
          price: finalPrice,
          qty: qty,
        })
        return
      } else if (food.size !== size) {
        await dispatch({
          type: 'ADD',
          id: foodItem._id,
          name: foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        })
        return
      } else return
    }

    await dispatch({
      type: 'ADD',
      id: foodItem._id,
      name: foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    })
  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])
  return (
    <div>
      <div className='card mt-3' style={{ maxHeight: '400px' }}>
        <img
          src={foodItem.img}
          className='card-img-top overflow-hidden object-fit-cover'
          alt='...'
          // style={{ height: '350px' }}
        />
        <div className='card-body'>
          <h5 className='card-title'>{foodItem.name}</h5>
          <p className='card-text'>{foodItem.description}</p>
          <div className='container'>
            <select
              className='m-2 p-1'
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                )
              })}
            </select>
            <select
              className='p-1'
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                )
              })}
            </select>

            <div className='d-inline fs-6 ms-1'>
              Total Price PKR{finalPrice}/-
            </div>

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
