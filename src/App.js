import React, { useState, Fragment } from "react";

import ListItem from "./ListItem";
import Form from "./Form";

const tasks = [
  { name: "", done: false },];

function TodoApp() {
  const [todos, setTodos] = useState(tasks);
  const [inputValue, setInputValue] = useState("");

  const _handleSubmit = e => {
    e.preventDefault();
    if (inputValue === "") return alert("Task name is required");

    const newArr = todos.slice();
    newArr.splice(0, 0, { name: inputValue, done: false });
    setTodos(newArr);
    setInputValue("");
  };

  //
  const _handleBntClick = ({ type, index }) => {
    const newArr = todos.slice();
    if (type === "remove") newArr.splice(index, 1);
    else if (type === "completed") newArr[index].done = true;

    return setTodos(newArr);
  };

  //
  return (
    <Fragment>
      <Form
        onSubmit={_handleSubmit}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <ul>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            todo={todo}
            remove={() => _handleBntClick({ type: "remove", index })}
            completed={() => _handleBntClick({ type: "completed", index })}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default TodoApp;
