import { useEffect, useState } from 'react';
import './App.css';
import Header from '../todo_components/Header';
import TodoList from '../todo_components/TodoList';

function App() {
  const filters = ['all', 'active','completed'];
  const [filter,setFilter] = useState('all');
  return (
    <div className='card'>
      <Header filters ={filters} filter={filter} onFiterChange={setFilter}/>
      <TodoList filter={filter} />
    </div>
  );
}

export default App;

