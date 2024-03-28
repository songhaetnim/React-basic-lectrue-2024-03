import { useState } from 'react';
import './App.css';


function App() {           
  const [count, setCount] = useState(0);    
  const [numbers, setNamebers] = useState([]);        
  const handleClick = () => {
  setCount(count+1);
  setNamebers([...numbers, count+1]);
  // numbers.push(count+1);           // 이렇게 사용하면 에러
  console.log(count);       
}
  return (                      
   <>                     
    <div style={{fontSize: '5rem'}}>{count}</div>
    <p>{numbers}</p>
    <button onClick={handleClick}>증가하기</button>
   
  </>
  );
}

export default App;

