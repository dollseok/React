import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, increaseAge } from "./../store/userSlice.js" 
import { addCount } from './../store.js'
function Cart(){

  let state = useSelector((state)=>state) 
  let dispatch = useDispatch()

  return(
    <div>
      <h1>
        {state.user.name} {state.user.age} 의 장바구니
      </h1>
      <button onClick={()=>{dispatch(increaseAge(10)); dispatch(changeName());}}>버튼</button>
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
                <td>{ state.cart[i].id }</td>
                <td>{ state.cart[i].name }</td>
                <td>{ state.cart[i].count }</td>
                <td>
                  <button onClick={()=>{
                    dispatch(addCount(state.cart[i].id)) 
                    // dispatch : store.js로 요청을 보내주는 함수
                    // dispatch(state변경함수()) 이렇게 사용
                  }}>+</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Cart