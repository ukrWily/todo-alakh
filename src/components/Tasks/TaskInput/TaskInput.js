import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) =>
//       props.invalid ? "rgba(243, 157, 157, .2)" : "transparent"};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #c8e1e4;
//     border-color: #00358b;
//   }
// `;

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
      {/* <FormControl invalid={!isInputValid}>
        <label>Tasks</label>
        <input
          type="text"
          onChange={taskInputChangeHandler}
          value={inputText}
        />
      </FormControl> */}
      <div
        className={`${styles["form-control"]} ${
          !isInputValid && styles.invalid
        }`}
      >
        <label>Tasks</label>
        <input
          type="text"
          onChange={taskInputChangeHandler}
          value={inputText}
        />
      </div>
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskInput;
