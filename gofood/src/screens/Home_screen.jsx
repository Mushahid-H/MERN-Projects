import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Carousal from '../Components/Carousal'
function Home_screen() {
  const [search, setSearch] = useState('')
  const [foodCat, setfoodCat] = useState([])
  const [foodItem, setfoodItem] = useState([])

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/food_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    response = await response.json()

    setfoodCat(response[1])
    setfoodItem(response[0])
  }

  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id='carouselExampleControls'
          className='carousel slide carousel-fade '
          data-bs-ride='carousel'
        >
          <div className='carousel-inner' style={{ maxHeight: '500px' }}>
            <div className='carousel-caption' style={{ zIndex: '10 ' }}>
              <div className='d-flex'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                />
                {/* <button className='btn btn-outline-success' type='submit'>
                  Search
                </button> */}
              </div>
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
      <div className='mx-md-3 m-2 d-flex flex-wrap justify-content-center'>
        <div className='row g-2'>
          {foodCat ? (
            foodCat.map((data) => {
              return (
                <>
                  <div key={data._id} className='fs-2 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr />

                  {foodItem ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filteredItems) => {
                        return (
                          <div
                            key={filteredItems._id}
                            className='col-md-4 col-sm-6 col-12'
                          >
                            <Card
                              foodItems={filteredItems}
                              options={filteredItems.options[0]}
                              // des={filteredItems.description}
                            />
                          </div>
                        )
                      })
                  ) : (
                    <div>No data found</div>
                  )}
                </>
              )
            })
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Home_screen
