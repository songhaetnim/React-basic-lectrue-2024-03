import { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import { Table } from 'react-bootstrap';

export default function TodoList({filter}) {
  const initData = readFromLocalStorage()
  const [todos, setTodos] = useState(initData);
  const handleUpdate = updated => 
    setTodos(todos.map(todo => (todo.id === updated.id) ? updated : todo));
  const handleDelete = deleted =>
    setTodos(todos.filter(todo => todo.id !== deleted.id));
  const handleAdd = todo => setTodos([...todos, todo]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = getFilteredTodos(todos, filter);
  return (
    <>
      <Table borderless size='sm'>
        {
          filteredTodos.map(todo => (
            <Todo todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
          ))
        }
      </Table>
      <AddTodo onAdd={handleAdd} />
    </>
  );
}

function readFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  console.log(todos);
  return todos ? JSON.parse(todos) : [];
}

function getFilteredTodos(todos, filter) {
  if (filter === 'all')
    return todos;
  return todos.filter(todo => todo.status === filter);
}