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














// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';

// export default function CherryBlossom() {
//   return (
//     <View style={styles.container}>
//       {/* 벚꽃 이미지 */}
//       <Image
//         source={require('./assets/cherry_blossom.png')}
//         style={styles.cherryBlossom}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff', // 배경색
//   },
//   cherryBlossom: {
//     width: 200, // 이미지 너비
//     height: 200, // 이미지 높이
//     resizeMode: 'contain', // 이미지 크기 조정 방법
//   },
// });
