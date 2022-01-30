import React from "react";
import TaskItem from "./TaskItem";
import { useState } from "react";
function TaskList(props) {
  const [taskItemList, setTaskItemlist] = useState([]);
  const handleInput = (e) => setText(e.target.value);

  const [text, setText] = useState("");

  const addItem = () => {
    setTaskItemlist([...taskItemList, { name: text, status: "0" }]);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        name="Task name"
        id="task"
        value={text}
        onChange={handleInput}
      />
      <button onClick={addItem}>save</button>
      {taskItemList &&
        taskItemList.map((item) => {
          return (
            <TaskItem key={item.name} name={item.name} status={item.status} />
          );
        })}
    </>
  );
}
export default TaskList;
