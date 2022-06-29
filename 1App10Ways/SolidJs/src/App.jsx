import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, onMount } from "solid-js";

function App() {

  const [todos, setTodos] = createSignal([]);
  let todoText;

  onMount(() => {
    const exisitngTodos = localStorage.getItem('todos');
    setTodos(exisitngTodos ? JSON.parse(exisitngTodos) : []);
  });

  function addTodo(event) {
    event.preventDefault();
    const next = [... todos(), todoText.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  return (
    <div>
      <ul>
        {todos().map(todo => (<li key={todo}>{todo}</li>))}  
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" ref={todoText} />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
}

export default App;
