import { useState } from 'react';
import '../apps/App.css';

export default function User() {
  const initUsers = [{id:1, name:'admin', email:'admin@gmail.com'},
                     {id:2, name:'james', email:'james@gmail.com'}];
  const [users, setUsers] = useState(initUsers); 
  return (
    <div className="card">    
      <h1>사용자 목록</h1>
      <table border={1}>
          <tr>
            <th>아이디</th><th>이름</th><th>이메일</th>
          </tr>
          {
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
      </table>
      <br />
      <button onClick={ () => {
        const id = prompt('ID를 입력하세요');
        const name = prompt('name를 입력하세요');
        const email = prompt('email를 입력하세요');     
        setUsers([...users, {id, name, email}])   
      }}>추가</button>
      <button onClick={ () => {
        const id = prompt('ID 값을 입력하세요.')
        const newUsers = users.filter(x => x.id != id);
        // let arr = [];
        // for (let user of users)
        //   if (user.id != id)
        //     arr.push(user)
        setUsers(newUsers);
      }}>삭제</button>
    </div>
  );
}
