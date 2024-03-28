import { useState } from 'react';
import './App.css';


function App() {           
  const [name, setName] = useState('제임스');    
  const [content, setContent] = useState('');
  return (                      
   <div className="card">                     
    <div style={{fontSize: '5rem'}}>{name}</div>
    <h3>{content}</h3>
    <br/>
    <button onClick={() => {
        const newName = prompt('이름을 입력하세요.');
        setName(newName);
    }}>이름 바꾸기</button>
    <br />
    <input type="text" onChange={event => {
      setContent(event.target.value);
    }}/>
    </div>
   
  
  );
}

export default App;

