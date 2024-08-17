import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css';

function Crousels() {
  return (
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
            />
            <Button variant="outline-success">Search</Button>
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
            />
            <Button variant="outline-success">Search</Button>
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
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
      
      
    </Carousel>
    </div>
  );
}

export default Crousels;
