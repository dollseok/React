import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// 컴포넌트에 갈고리 다는 법
// class Detail2 extends React.Component{
//   componentDidMount(){
//     // 컴포넌트 mount 시 여기 코드 실행
//   }
//   componentDidUpdate(){
//     // 컴포넌트 update 시 여기 코드 실행
//   }
//   componentWillUnmount(){
//     // 컴포넌트 unmount 시 여기 코드 실행
//   }
// }

function Detail(props){
  // useEffect써서 컴포넌트에 갈고리 다는 방법
  
  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)
  let { id } = useParams();
  let shoe = props.shoes.find((x)=>{ return x.id == id })
  id = Number(id) + 1
  
  
  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false) },2000) 

    return ()=>{
      clearTimeout(a)
    }
  }, [count]) 

  // useEffect(()=>{}) // 1. 재렌더링마다 코드 실행하고 싶으면
  // useEffect(()=>{},[]) // 2. mount시 1회 코드 실행하고 싶으면
  // // 3. unmount시 1회 코드 실행하고 싶으면
  // useEffect(()=>{
  //   return ()=>{

  //   }
  // }, [])
  // // 4. useEffect 전에 무엇인가를 실행하려면 언제나 return()=>{}
  // // 5. 특정 state 변경시에만 실행하려면 [state명]

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
    </div>
  )
}

export default Detail;