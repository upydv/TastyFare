import Button from 'react-bootstrap/Button';
import React, { useEffect, useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useCart, useDispatchCart } from './ContextReducer';

const Cards = (props) => {
  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();

  const [qty, setQty] = useState('1');
  const [size, setSize] = useState("");

  let options = props.options;
  let priceOptions = Object.keys(options);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  let finalPrice = qty * parseInt(options[size]);

  const handleAddToCart = async () => {
    let food=[]
    for(const item of data){
      if(item.id===props.foodItem._id){
        food=item
      break
      }
    }
    if(food){
      if(food.size===size){
        await dispatch({type:"UPDATE", id:props.foodItem._id,price:finalPrice,qty:qty})
        return
      }
      else if(food.size!==size){
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          foodName: props.foodItem.foodName,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.imgSrc
        });
        return
      }
      return 
    }
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      foodName: props.foodItem.foodName,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.imgSrc
    });
    console.log(data);
  };

  return (
    <Card className='m-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgSrc} style={{ height: '140px', objectFit: 'fill' }} />
      <Card.Body>
        <Card.Title>{props.foodName}</Card.Title>
        <div className='container w-100'>
          <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              );
            })}
          </select>
          <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
            {priceOptions.map((data) => (
              <option key={data} value={data}>{data}</option>
            ))}
          </select>
        </div>
        <div className='d-inline h-100 fs-5'>
         price: $ {finalPrice}/-
        </div>
        <hr />
        <Button className='bg-success' onClick={handleAddToCart}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
