import {Button, Navbar, Nav, Container,Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import data from './data.js'; 
import Detail from './routes/Detail.js'
import axios from 'axios'
import Cart from './routes/Cart.js'



function App() {

  let [shoes, setShoeslist] = useState(data);

  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg="light" data-bs-theme="light"  >
        <Container>
          <Navbar.Brand href="#home">ACC shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart')}}>Cart</Nav.Link>
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

            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((res)=>{ 
                console.log(res.data)
                setShoeslist(shoes.concat(res.data))
                let copy = [...shoes, ...res.data];
                setShoeslist(copy)
              })
              .catch(()=>{
                console.log('실패했습니다.')
              
              })

              // 서버로 데이터를 전송하는 POST 요청
              axios.post('/woiefj', {name:'kim'})

              // 동시에 ajax 요청 여러개하려면
              Promise.all([ axios.get('/url1'), axios.get('/url2')])
              .then(()=>{
                // 모두 성공했을 때 진행
              })

            }}>버튼</button>
            
          </>
        }></Route>  


        <Route path="/detail/:id" element={ 
          <Detail shoes={ shoes }/> }/>

        <Route path="/cart" element={<Cart/>}/>

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
