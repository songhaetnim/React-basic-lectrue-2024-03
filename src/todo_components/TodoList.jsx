import { useEffect, useState } from 'react';
import '../apps/App.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './AddTodo';
import Todo from './Todo';
import reportWebVitals from '../reportWebVitals';

export default function TodoList({filter}) {
  const initData = readFromLocalStorage([
    {id:uuidv4(), work:'공부하기', status:'active'},
    {id:uuidv4(), work:'청소하기', status:'active'},
  ])
  const [todos, setTodos] = useState(initData);
  const handleUpdate = updated => 
    setTodos(todos.map(todo => (todo.id === updated.id) ? updated : todo));
  const handleDelete = deleted =>
    setTodos(todos.filter(todo => todo.id !== deleted.id));
  const handleAdd = todo => setTodos([...todos, todo]);

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = getFilteredItems(todos, filter);
  return (
    <div>
      <ul>
        {
          filteredTodos.map(todo => (
            <Todo todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
          ))
        }
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}

function readFromLocalStorage(){
  const todos = localStorage.getItem('todos');
  console.log(todos);
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter){
  if (filter === 'all')
    return todos;
  return todos.filter(x => x.status === filter);
}
  
  
  