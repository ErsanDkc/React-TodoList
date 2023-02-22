import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Header({ setTodos, todos }) {
  const [inputText, setinputText] = useState("");
  const onChangeinput = (e) => {
    setinputText(e.target.value);
  };

  const formSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (inputText === "") {
      return alert("You have to fill correctly each input area!");
    }
    setTodos([...todos, { id: uuidv4(), todo: inputText, completed: false }]);
    setinputText("");
  };

  return (
    <div>
      <header className="header">
        {" "}
        <br />
        <h1>Todos</h1>
        <form onSubmit={formSubmit}>
          <input
            name="todo"
            value={inputText}
            onChange={onChangeinput}
            className="new-todo"
            placeholder="Please Enter todo"
            autoFocus
          />
        </form>
      </header>
    </div>
  );
}

export default Header;
