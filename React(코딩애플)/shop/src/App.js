import {Button, Navbar, Nav, Container,Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import data from './data.js'; 
import Detail from './routes/Detail.js'





function App() {

  let [shoes] = useState(data);

  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg="light" data-bs-theme="light"  >
        <Container>
          <Navbar.Brand href="#home">ACC shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <Container>
              <Row>
                {
                  shoes.map(function(param,i){
                    return (
                      <Card shoes={shoes[i]} i={i+1}></Card>
                      )
                    })
                  }
              </Row>
            </Container>
          </>
        }></Route>  
        <Route path="/detail/:id" element={ <Detail shoes={ shoes }/> }></Route>



        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>}/>
          <Route path="location" element={<div>위치</div>}/>
        </Route>
        <Route path="*" element={ <div>404 NOT FOUND</div> }></Route>
      </Routes>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
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
