import React from 'react'
import { useCart, useDispatch } from '../Components/ContextReducer'

const Cart = () => {
  let data = useCart()
  let dispatch = useDispatch()
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center text-light fs-3'>
          The Cart is Empty
        </div>
      </div>
    )
  }
  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {data.map((food, index) => (
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type='button' className='btn p-0'>
                    <i
                      class='fa fa-trash'
                      aria-hidden='true'
                      onClick={() => {
                        dispatch({
                          type: 'REMOVE',
                          index: index,
                        })
                      }}
                    ></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='fs-2'>
          <h1>Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className='btn btn-success mt-5'>Check out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart