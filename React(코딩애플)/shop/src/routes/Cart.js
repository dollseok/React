import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from "./../store.js" 

function Cart(){

  let state = useSelector((state)=>state) 
  console.log(state.cart[0].name)
  let dispatch = useDispatch()

  return(
    <div>
      <h1>
        {state.user}의 장바구니
      </h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr> 
        </thead>
        <tbody>
          {
            // 3. 만든 함수를 import 해서 사용
            state.cart.map((a,i)=>
              <tr key={i}>
                <td>1</td>
                <td>{ state.cart[i].name }</td>
                <td>{ state.cart[i].count }</td>
                <td>
                  <button onClick={()=>{
                    dispatch(changeName()) 
                    // dispatch : store.js로 요청을 보내주는 함수
                    // dispatch(state변경함수()) 이렇게 사용
                  }}>+</button>
                </td>
              </tr>
            )
          }
          <tr>
            <td>1</td>
            <td>{ state.cart[0].name }</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Cart