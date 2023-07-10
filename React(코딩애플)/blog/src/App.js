/* eslint-disable */

import logo from './logo.svg';
import './App.css'; // css파일은 import해줘야함
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['여자 코트 추천','강남 돈까스 맛집', '파이썬 공부']);

  let [like, changeLike] = useState([0,0,0]);
  
  let [modal, setModal] = useState(false); // 스위치 역할을 함

  let [title, setTitle] = useState(0);

  let [입력값, 입력값변경] = useState('')

  function 글삭제(idx){
    let copy = [...글제목];
    copy.splice(idx,2); // 뒤에 요소 = 이어서 삭제할 개수
    글제목변경(copy);
  }

  function 글생성(inputData){
    // 답안
    // let copy = [...글제목];
    // copy.unshift(입력값);
    // 글제목변경(copy)

    let newData = [...글제목,inputData];
    let newlike = [...like, 0];
    글제목변경(newData);
    changeLike(newlike);
    입력값변경('');
  }

  function 좋아요변경(a){
    let copy = [...like]
    copy[a] += 1
    changeLike(copy)
  }

  return (

    <div className="App">
      <div className="black-nav">
        <h4> React Blog </h4>
      </div>

      {
        // 중괄호 안에서 반복문 쓰는 방법
        글제목.map(function(param, i){   // i = 반복문 돌 때 마다 0부터 1씩 증가하는 정수
          return (
            <div className='list' key={i}>
              <h4  onClick={(e)=>{ setModal(!modal); setTitle(i);}}> 
                { 글제목[i] } 
                <span onClick={ (e) => { e.stopPropagation(); 좋아요변경(i); }}>❤️</span> { like[i] }
              </h4>         
              <p>7월 3일 발행</p>
              <button onClick={ () => 글삭제(i) }>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value) // 늦게 처리가 되는 편
        console.log(입력값)        // 다음줄 먼저 처리가 됨
        }}></input>
      <button onClick={()=>{
        글생성(입력값);
      }}>생성</button>

      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null 
      }

    </div>
  );
}



function Modal(props){
  return(
    <div className='modal'>
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>싱세 내용</p>
    </div>
  )
}

export default App;
