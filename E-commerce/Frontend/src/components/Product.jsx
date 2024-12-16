import React from 'react'
import {Card} from "react-bootstrap"
import {Link} from 'react-router-dom'

function Product({product}){
  return(
    <Card className='my-3 p-3 rounded'>
      <Link to={`/products/${product.id}`}>
        <Card.Img src={`http://localhost:8000${product.product_img}`} />
      </Link>
      <Card.Body>
        <Link to={`/api/products/${product.id}`}>
          <Card.Title as="div">
            <strong>{product.productname}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>

  )
}

export default Product;