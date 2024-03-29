import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdLibraryAddCheck } from "react-icons/md";
import { Form, Button, InputGroup } from 'react-bootstrap';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (event) => setText(event.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0)
      return;
    onAdd({id:uuidv4(), work:text, status:'active'});
    setText('');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mt-5">
        <Form.Control placeholder="할 일을 입력하세요." type='text' value={text}
          onChange={handleChange} />
        <Button variant="primary" type='submit'><MdLibraryAddCheck /> 추가</Button>
      </InputGroup>
    </Form>
  );
}