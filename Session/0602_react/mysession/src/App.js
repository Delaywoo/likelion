/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle]=useState(['멋쟁이사자처럼', '마지막 세션 신난다', '리엑트어려워 ㅜㅜ']);
  let [good, setGood]=useState(0);
  let newtitle = '새로운 제목';
  let [따봉,따봉변경] = useState([0,0,0]);
  let [입력값, 입력값변경] = useState('');

  return (

    <div className="App">
        <div className="black-nav">
          <div>멋쟁이 사자처럼 React Session</div>
        </div>

        <button onClick={ () => {
          var titleArray = [...title];
          titleArray.splice(0,1,newtitle);
          setTitle(titleArray);
        }}>글제목변경</button>
        <button onClick={ () => {
          var titleArray = [...title];
          titleArray.sort();
          setTitle(titleArray);
        }}>가나다순</button>

        { //{} 괄호가 있어야 이 파일내에서 자바스크립트 라는 것을 인식할 수 있다.
          title.map(function(a,i){ //a: 각각의 요소들을 지시, i: 각 요소들의 인덱스를 가리킴, title리스트 내에서 끝까지 돌음. div태그 내에서 key={i}를 반드시 설정해야 돌아감!
            return(
              <div className='list' key={i}>
        	      <h4> {title[i]} <span onClick={() => {
                  let copy = [...따봉];
                  copy[i] = 따봉[i]+1;
                  따봉변경(copy);
                }}>👍</span>{따봉[i]}
                <button onClick={() => {
                  var titleArray = [...title];
                  titleArray.splice(i,1);
                  setTitle(titleArray);
                }}>글 삭제</button>
                </h4>
                <p>6월 2일 발행</p>
              </div>
            )
          })
        }

        <input onChange={(e) => {
          입력값변경(e.target.value) //e.target.value값이 useState에서 입력값변경 함수를 통해 입력값 자리에 들어간다!
        }}></input> 
        <button onClick={() => { //버튼이 눌릴 때에만 추가되야하므로 ! input에서 한번에 처리하면 안됨. 그럼 input값이 변경될때마다 게시글이 추가된다,, 주의
          let copy = [...title];
          copy.push(입력값);
          setTitle(copy);
        }}>추가</button>


    </div>
  );

  

} export default App;

function BlogPosts(props) {
  return(
    <div className='list'>
          <h4> {props.title[props.i]} <span>👍</span></h4>
          <p>6월 2일 발행</p>
    </div>
  );
}

