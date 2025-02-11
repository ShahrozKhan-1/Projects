import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Sandwich() {

  const[product, setProduct] = useState([]);
  const[cart, setCart] = useState([])

  useEffect(()=>{
    axios 
      .get('http://127.0.0.1:8000/products/')
      .then((response)=>{
        const filteredBurgers = response.data.filter(item => item.category === "sandwiches");
        setProduct(filteredBurgers);
      })

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addCart = (item) => {
    setCart((prevCart) => {
      // Check if item is already in the cart
      if (prevCart.some(cartItem => cartItem.id === item.id)) {
        alert("This item is already in the cart!");
        return prevCart; // Don't add duplicate items
      }

      const updatedCart = [...prevCart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;
    });
  };
  
  return (
    <Container className='text-light'  id='pizza'>
        <Row className='d-flex align-items-center'>
            <Col xs={1} className='headingline'></Col>
            <Col xs={'auto'}>
                <h1>Sandwich</h1>
            </Col>
            <Col xs={7} className='headingline'></Col>
        </Row>
        {product.map((item)=>(
        <Row key={item.id}>
          <Col>
            <img src={`http://127.0.0.1:8000${item.image}`} className='w-50 h-50 rounded' />
          </Col>
          <Col>
            <h4>{item.name}</h4>
            <p className='text-light-emphasis mt-4'>{item.description}</p>
            <p className='text-danger'>Price: {item.price}Rs</p>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => addCart(item)}>Add to Cart</Button>
          </Col>
        </Row>
        ))}
    </Container>
  )
}

export default Sandwich