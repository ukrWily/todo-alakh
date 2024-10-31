import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [inputText, setinputText] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputValid(true);
    }
    setinputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim()) {
      if (inputText.trim().length > 30) {
        props.onAddTask(inputText.slice(0, 30) + "...");
        setinputText("");
      } else {
        props.onAddTask(inputText);
        setinputText("");
      }
    } else {
      setIsInputValid(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isInputValid ? "black" : "red" }}>Tasks</label>
        <input
          type="text"
          onChange={taskInputChangeHandler}
          value={inputText}
          style={{ border: isInputValid ? "1px solid black" : "2px solid red" }}
        />
      </div>
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskInput;
