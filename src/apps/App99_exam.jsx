import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount(count+1);
  }
  return (
    <div style={{width: '200px', textAlign: 'center', backgroundColor: '#ebebeb'}}>    
      <div style={{fontSize: '5rem'}}>{count}</div>
      <button onClick={handleClick} disabled={count >= 10}>증가하기</button>
      <button onClick={() => setCount(1)}>리셋하기</button>
    </div>
  );
}

export default App;