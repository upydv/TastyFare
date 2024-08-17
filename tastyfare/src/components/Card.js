
import React from 'react'
import Card from 'react-bootstrap/Card';
const Cards = (props) => {
  let options=props.options
  let priceOptions=Object.keys(options)
  return (
    <Card className='m-3' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.imgSrc} style={{height:'140px', objectFit:'fill'}}/>
    <Card.Body>
      <Card.Title>{props.foodName}</Card.Title>
      <div className='container w-100'>
        <select className='m-2 h-100 bg-success'>
          {
            Array.from(Array(6),(e,i)=>{
              return(
                <option key={i+1} value={i+1}>{i+1}</option>
              )
            })
          }
        </select>
        <select className='m-2 h-100 bg-success rounded'>
          {
            priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
            })
          }
        </select>
      </div>
      <div className='d-inline h-100 fs-5'>Total Price</div>
    </Card.Body>
  </Card>
  )
}

export default Cards
