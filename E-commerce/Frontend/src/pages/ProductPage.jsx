import {React, useState, useEffect} from 'react'
import api from './api'
import "../pages/Home.css"
import { Container, Col, Row, Card, ListGroup, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'


function ProductPage() {

  const {id} = useParams()
  const [product, setProduct] = useState([]);

  useEffect (() => {
    async function fetchproducts() {
    const { data } = await api.get(`/api/products/${id}/`);
    setProduct(data);
    }
    fetchproducts();
  }, []);

  return (
    <Container>
      <Link to={"/"} className='btn btn-dark my-3'> Go Back </Link>
      <Row>

        <Col md={3} className='image-container'>
          <img src={`http://localhost:8000${product.product_img}`} className='product-image' alt={product.productname} />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.productname}</h3>
            </ListGroup.Item>
            {/* <ListGroup.Item>
            <Rating
            value={product.rating}
            text={'${product. numReviews} reviews'}
            color={"#f8e825"}
            />
            </ListGroup.Item> */}
            <ListGroup.Item>Price: {product.price} Rs</ListGroup.Item>
            <ListGroup.Item className='text-justify'>
              Description: {product.productinfo}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price} Rs</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status: </Col>
                  <Col>
                    {product.stockcount > 0 ? "In Stock": "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' disabled={product.stockcount==0} type='button'>Add to Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductPage
