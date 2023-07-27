import {Table} from 'react-bootstrap'
import { useSelector } from 'react-redux'


function Cart(){

  let a = useSelector((state)=>{ return state.stock }) 
  // Redux store에 있던 state를 가져와주는 함수
  // 위의 state는 store 안에 있던 모든 state
  // return 생략가능

  console.log(a) // stock만 뽑아서 쓸수 있음


  return(
    <div>
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
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Cart