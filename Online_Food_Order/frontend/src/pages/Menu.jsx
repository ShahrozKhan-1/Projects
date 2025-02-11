import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from '../components/Navbar/Page_Navbar'
import Burger from './Burger'
import Pizza from './Pizza'
import Sandwich from './Sandwich'
import Shawarmas from './shawarmas'

function Menu() {
  return (
    <Container>
        <Row className="main-logo w-4 mx-auto">
            <img src="../chill_zone.png" alt="Chilll Zone Logo" />
        </Row>
        <Row>
            <Navbar />
        </Row>
        <Row>
            <Burger />
        </Row>
        <Row>
          <Pizza />
        </Row>
        <Row>
          <Sandwich />
        </Row>
        <Row>
          <Shawarmas />
        </Row>
    </Container>
  )
}

export default Menu