import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'kim',
  // 1. state 수정해주는 함수 만들기
  reducers : {
    changeName(state){
      return 'john' + state
    }
  }
  // 2. 만든 함수 export 해줘야 함

})

// 변경함수들 reducers 들이 남음
export let { changeName } = user.actions // 오른쪽에 있던 자료를 변수로 빼는 문법일 뿐


let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ]
})


export default configureStore({
  reducer: {
    user : user.reducer, // 작명, 이름을 같게 함
    cart : cart.reducer
  }
})