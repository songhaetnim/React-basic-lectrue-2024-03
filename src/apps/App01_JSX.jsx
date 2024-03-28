import './App.css';

function App() {                         // 내가 만든 태그의 앞자리는 무조건 대문자 
  const name = 'JAmes';          // 자바ㅏ스크립트 영역
  const foods = ['피자','삼겹살','불고기'];
  return (                      

   <>        {/* 하나의 태그로 감싸주어야 함*/}                                
    <h1 style={{backgroundColor:"beige"}}>name: {name}</h1>
    <hr />     {/* 반드시 닫는 태그가 있어야 함 */}
    <img src="https://picsum.photos/200/200" className="photo" />   
    <br />     {/*class는 className으로*/}
   </>
  );
}

export default App;

