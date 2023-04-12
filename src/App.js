import "./styles/index.css";
import DisplayTodos from "./pages/DisplayTodos";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div className="App">
        <TodoList />
        <DisplayTodos />
    </div>
  );
}

export default App;
