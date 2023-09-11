import { useState } from 'react';
import Todos from './Component/Todos';

function App() {

  const [allTodos, setAllTodos] = useState([]);

  const handleSubmit = (todo) => {
    const newId = allTodos.length ? allTodos[allTodos.length - 1].id + 1 : 1;
    const newTodo = {
      id: newId,
      name: todo.name,
      desc: todo.desc
    }
    console.log(newTodo)
    setAllTodos([...allTodos, newTodo]);
  }

  const handleDelete = (todoToDelete) => {
    const newTodoList = allTodos.filter(todo => todo.id !== todoToDelete.id);
    setAllTodos(newTodoList);
  }

  return (
    <div className="main-container">
      <Todos allTodos={allTodos} handleSubmit={handleSubmit} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
