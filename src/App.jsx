import { useState } from 'react';
import './reset.css';
import './App.css';
import Header from './components/header.jsx';
import ToDo from './components/todo.jsx';
import Input from './components/input.jsx';
import Footer from './components/footer.jsx';

function App() {
  const [todo, setTodo] = useState([]);

  const deleteTodo = (id) => {
      setTodo(todo.filter((item) => item[0] !== id));
  };
  

  return (
    <nav>
      <Header />
      <div className="main-todo-container">
        <div className='second-todo-container'>
        {todo.map((result) => (
          result !== undefined ? <ToDo key={result[0]} tabTodo={todo} todo={result} setTodo={setTodo} deleteTodo={deleteTodo}/> : ""
        ))}
        </div>
      </div>
      <Input todo={todo} setTodo={setTodo} />
      <Footer />
    </nav>
  );
}

export default App;
