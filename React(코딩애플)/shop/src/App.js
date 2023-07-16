import {Button, Navbar, Nav, Container,Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

// 2. import 하면 사용 가능

import data from './data.js'; 

function App() {

  let [shoes] = useState(data)



  return (
    <div className='App'>
      <Navbar bg="light" data-bs-theme="light"  >
        <Container>
          <Navbar.Brand href="#home">ACC shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Carts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <Container>
        <Row>

          <Card shoes={shoes[0]} i={1}></Card>
          <Card shoes={shoes[1]} i={2}></Card>
          <Card shoes={shoes[2]} i={3}></Card>

          {
            shoes.map(function(param,i){
              console.log(param)
              return (
                <Card shoes={shoes[i]} i={i+1}></Card>
              )
            })
          }
          
          {/* <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </Col>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </Col>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </Col> */}
        </Row>
      </Container>

    </div>
  );
}

function Card(props){
  return(
    <Col sm="4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ props.i +'.jpg'} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;
