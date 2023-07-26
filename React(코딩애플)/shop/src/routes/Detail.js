import { useParams } from "react-router-dom";
import styled from "styled-components"

let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg=='blue' ? 'white':'black'};
  padding : 10px;
`

let NewBtn = styled.button(YellowBtn)` 
  /* 여기 안에 커스터마이징 가능 */
`

let Box = styled.div`
  background : grey;
  padding : 20px;
`


function Detail(props){

  let { id } = useParams();
  console.log("https://codingapple1.github.io/shop/shoes" + id + ".jpg")

  let shoe = props.shoes.find((x)=>{ return x.id == id })
  id = Number(id) + 1
  // console.log(shoe)
  
  return(
    <div className="container">

        <YellowBtn bg="yellow">버튼</YellowBtn>
        <YellowBtn bg="blue">버튼</YellowBtn>


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