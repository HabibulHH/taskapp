import React from "react";
import { useSelector } from "react-redux";
import EntryForm from "./EntryForm";
import TaskItem from "./TaskItem";

function TaskList(props) {
  const { tasks } = useSelector((state) => state.taskStore);
  return (
    <>
      <EntryForm />
      {tasks.map((item, index) => {
        return <TaskItem item={item} />;
      })}
    </>
  );
}
export default TaskList;
