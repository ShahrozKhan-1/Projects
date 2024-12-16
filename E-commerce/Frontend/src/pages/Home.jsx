import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import api from './api';
import Product from '../components/Product';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect (() => {
    async function fetchproducts() {
    const {data} = await api.get("/api/products/");
    setProducts (data);
    }
    fetchproducts();
  }, []);

  return (
    <>
      <Container>
        <h1>Products</h1>
        <Row className="gx-5">
          {products.map((product) => (
            <Col key={product.id} s={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;

