import { useState } from 'react';
import Header from '../todo_bs_components/Header';
import TodoList from '../todo_bs_components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState('all');
  return (
    <Card style={{ width:'20rem' }} className='mt-3 ms-3'>
      <Card.Header>
        <Card.Title style={{textAlign:'center'}}><h2>오늘의 할 일</h2></Card.Title>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      </Card.Header>
      <Card.Body>
        <TodoList filter={filter} />
      </Card.Body>
    </Card>
  );
}

export default App;