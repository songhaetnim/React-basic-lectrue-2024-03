import { useState } from 'react';
import './App.css';

export default function App() {
  const [foods, setFoods] = useState(['피자', '삼겹살', '불고기']);
  return (
    <div className='card'>    
      <ul>내가 좋아하는 음식
        {
          foods.map((value, idx) => (
            <li ket={idx}>{value}</li>
            ))
          }
          <br />
          <button onClick={() => {
            const item = prompt('좋아하는 음식을 입력하세요.');
            setFoods([...foods, item])
          }}>메뉴 추가</button>
      </ul>
    </div>
  );
}