import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();
// CORSミドルウェアの使用
app.use('*', cors());

// メモリ内にToDoリストを保持
let todos: { id: number; text: string; completed: boolean }[] = [];

// ToDoの取得
app.get('/todos', (c) => {
  return c.json(todos);
});

// ToDoの追加
app.post('/todos', async (c) => {
  const { text } = await c.req.json();
  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
  };
  todos.push(newTodo);
  return c.json(newTodo);
});

// ToDoの削除
app.delete('/todos/:id', (c) => {
  const id = Number(c.req.param('id'));
  todos = todos.filter((todo) => todo.id !== id);
  return c.json({ message: 'Deleted' });
});

// サーバーの起動
Bun.serve({
  fetch: app.fetch,
  port: 3000,
});
