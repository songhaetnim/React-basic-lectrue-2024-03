import { useState } from 'react';
import '../apps/App.css';


export default function CardInput2() {           
  const [form, setForm] = useState({name:'',email:''});
  const handleSubnit =(event) => {
    event.preventDefault();       // submit button을 누르면 페이지 자동적으로 바뀌는것을 방지
    console.log(form);
  }
  const handleChange = (event) => {
    const {name, value} = event.target;
    setForm({ ...form, [name]: value})

  }
  return (                      
   <div className="card">                     
    <div style={{fontSize: '5rem'}}>{form.name}</div>
    <h3>{form.email}</h3>
    <h3>{form.content}</h3>
    <br/>
    <form onSubmit={handleSubnit}>
      <label>이름:</label>
      <input type='text'  id='name' name='name' value={form.name}
      onChange={handleChange}
      /><br />
       <label>이메일:</label>
       <input type='text'  id='email' name='email' value={form.email}
      onChange={handleChange}
      /><br />
      <button>제출</button>
    </form>
  </div>
   );
}



