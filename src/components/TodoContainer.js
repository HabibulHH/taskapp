import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import EntryForm from "./EntryForm";

function TaskList(props) {
  const { tasks } = useSelector((state) => state.taskStore);
  return (
    <>
      <EntryForm />
      {tasks.map((item, index) => {
        return (
          <TaskItem
            key={item.name}
            name={item.name}
            id={index + 1}
            status={item.status}
          />
        );
      })}
    </>
  );
}
export default TaskList;
