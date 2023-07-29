import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


let cart = createSlice({
  name : 'cart',
  initialState :[
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action){
      // 리스트에서 원하는 조건의 항목의 idx를 찾아주는 것
      let idx = state.findIndex((a)=>{
        return a.id == action.payload
      })
      state[idx].count++
    },

    addtoCart(state,action){
      console.log(action.payload)
      state.push(
        {
          id : action.payload.id,
          name : action.payload.title,
          count : 1,
        }
      )
    }
  }
  })
  export let { addCount, addtoCart } = cart.actions


export default configureStore({
  reducer: {
    user : user.reducer, // 작명, 이름을 같게 함
    cart : cart.reducer
  }
})