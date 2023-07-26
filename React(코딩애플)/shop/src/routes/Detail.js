import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Nav } from 'react-bootstrap'


function Detail(props){
  
  let { id } = useParams();
  let shoe = props.shoes.find((x)=>{ return x.id == id })
  id = Number(id) + 1

  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)
  let [탭, 탭변경] = useState(0)
  
  
  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false) },2000) 

    return ()=>{
      clearTimeout(a)
    }
  }, [count]) 

  return(
    <div className="container">
      {
        alert == true ? <div className="alert alert-warning">2초 이내 구매 시 할인</div>
        : null
      }
      

      {count}
      <button onClick={()=>{ setCount(count+1) }}>버튼</button>
      
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + id + ".jpg"} width="100%"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{ shoe.title }</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey={"link0"}>
        <Nav.Item>
          <Nav.Link eventKey="Link0" onClick={()=>{탭변경(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Link1" onClick={()=>{탭변경(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Link2" onClick={()=>{탭변경(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭}/>



    </div>
  )
}

// props 대신 {} 안에 변수 넣어주면 바로 사용 가능
function TabContent({탭}){
  let [fade, setFade] = useState('')


  // 탭 state가 변할 때 end 부착
  useEffect(()=>{
    setTimeout(()=>{setFade('end')},100)
    // end를 붙여주세요 == fade라는 state를 end로 바꿔주세요
    // setFade('end')

    // 탭 state가 변할 때 end 떼주세요
    return()=>{
      setFade('')
    }
    
  },[탭])


  return (<div className={`start ${fade}`}>
    { [<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][탭] }
  </div> )
}

// return 이 있어야 돌려줄수 있다
function TabContentif(props){
  if (탭 == 0) {
    return <div>내용0</div>
  }
  else if (탭 == 1) {
    return <div>내용1</div>
  }
  else if (탭 == 2) {
    return <div>내용2</div>
  }
}

export default Detail;