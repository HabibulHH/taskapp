import React from "react";
import TaskItem from "./TaskItem";

import useTodoItemList from "../hooks/useTodoItemList";
import useTextInput from "../hooks/useTextInput";
function TaskList(props) {
  const taskItemList = useTodoItemList([{ name: "hira add", status: "1" }]);
  const [todo, setTodo, resetTodo] = useTextInput("");

  const handleClick = (e) => {
    e.preventDefault();
    if (todo === "") return;
    taskItemList.addItem(todo);
    resetTodo();
  };

  return (
    <>
      <input id="todo" className="todo-input" onChange={setTodo} value={todo} />
      <button onClick={handleClick}>save</button>
      {taskItemList.TaskList.map((item) => {
        return (
          <TaskItem key={item.name} name={item.name} status={item.status} />
        );
      })}
    </>
  );
}
export default TaskList;
