import { useState } from "react";

function Main({ todos, setTodos }) {
  const [filter, setFilter] = useState("All");

  const completedTodo = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
    
  };
  
  const allTodoDelete = () => setTodos([]);
  const activeClick = () => setFilter("Active");

  const all = () => setFilter("All");    

  const completedClick = () => setFilter("Completed");

  function allTodoCompleted() {
    const allChecked = todos.every((item) => item.completed);
    setTodos(todos.map((item) => ({ ...item, completed: !allChecked })));
  }
  
  

  const filteredTodos =
    filter === "All"
      ? todos
      : todos.filter((item) => {
          if (filter === "Active") {
            return item.completed === false;
          } else if (filter === "Completed") {
            return item.completed === true;
          }
        });
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox"  />
      <label htmlFor="toggle-all" onClick={allTodoCompleted} >Mark all as complete</label>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="view">
              <input
                onChange={() => completedTodo(todo.id)}
                checked={todo.completed}
                className="toggle"
                type="checkbox"
              />
              <label>{todo.todo}</label>
              
              <button
                onClick={() => deleteTodo(todo.id)}
                className="destroy"
              ></button>
            </div>
          </li>
        ))}
      </ul>

      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.length} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a onClick={all} href="#/" className="">
              All
            </a>
          </li>
          <li>
            <a onClick={activeClick} href="#/">
              Active
            </a>
          </li>
          <li>
            <a onClick={completedClick} href="#/">
              Completed
            </a>
          </li>
        </ul>

        <button onClick={allTodoDelete} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default Main;
