import React, { useEffect, useState } from 'react'
import Cards from '../components/Card'
import Footer from '../components/Footer'
import TestNavBar from '../components/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';

const Home = () => {
  const [search, setSearch] = useState('')
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      }
    })
    response = await response.json()
    setFoodCat(response[1])
    setFoodItem(response[0])
    // console.log(response[0],response[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <TestNavBar />
      <div className='Crousels'>
      <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1041137232/photo/100-gluten-free-low-carb-hamburger-and-bun.webp?b=1&s=612x612&w=0&k=20&c=E_VrRWeGLkLwDFfhJkxLywfUFEvHsk3xC-kGOGfaeUw="
          alt="Delicious pasta"
        />
        <Carousel.Caption className="search-bar-caption">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search} onChange={(e)=>{setSearch(e.target.value)}}
            />
          </Form>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1297640502/photo/gulab-jamun-with-coconut.jpg?s=1024x1024&w=is&k=20&c=c6u8Zib0WI8JfrH04RccdNAhdEql4O-c2KkiPpsBMrs="
          alt="Fresh salad"
        />
        <Carousel.Caption className="search-bar-caption">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search} onChange={(e)=>{setSearch(e.target.value)}}
            />
          </Form>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1024564130/photo/traditional-dumpling-momos-food-from-nepal-served-with-tomato-chutney-over-moody-background.webp?b=1&s=612x612&w=0&k=20&c=uUT_iANscxPipYxelrYNMR_PAvlj2VWHZi-TAsdml1w="
          alt="Sizzling steak"
        />
        <Carousel.Caption className="search-bar-caption">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search} onChange={(e)=>{setSearch(e.target.value)}}
            />
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
      
      
    </Carousel>
    </div>
      <div className='container'>
        {
          foodCat.length > 0
            ? foodCat.map((data) => (
              <div key={data._id} className='mb-3'>
                <div className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                <div className='row'>
                  {
                    foodItem.length > 0
                      ? foodItem.filter((item) => (item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLowerCase())))
                        .map(filteredItem => (
                          <div key={filteredItem._id} className='col-12 col-md-6 col-lg-3 mb-4'>
                            <Cards foodName={filteredItem.name} options={filteredItem.options[0]} imgSrc={filteredItem.img} />
                          </div>
                        ))
                      : <div>No items available</div>
                  }
                </div>
              </div>
            ))
            : <div>****************</div>
        }
      </div>
      <Footer />
    </>
  )
}

export default Home
