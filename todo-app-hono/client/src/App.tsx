import React, { useState, useEffect } from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  // ToDoの取得
  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  // ToDoの追加
  const addTodo = () => {
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
        setText('');
      });
  };

  // ToDoの削除
  const deleteTodo = (id: number) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>ToDoアプリ</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="新しいToDoを入力" />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
