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
  useEffect(()=>{
    // mount,update시 여기 코드 실행
    console.log('안녕')
  })

  let [count, setCount] = useState(0)



  let { id } = useParams();
  let shoe = props.shoes.find((x)=>{ return x.id == id })
  id = Number(id) + 1
  
  return(
    <div className="container">

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