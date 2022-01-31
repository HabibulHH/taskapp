import React from "react";
import { useSelector } from "react-redux";
import EntryForm from "./EntryForm";
import TaskItem from "./TaskItem";

import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  display: grid;
  justify-content: center;
`;
function TaskList(props) {
  const { tasks } = useSelector((state) => state.taskStore);
  return (
    <Container>
      <EntryForm />
      {tasks &&
        tasks
          .sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          })
          .map((item, index) => {
            return <TaskItem item={item} />;
          })}
    </Container>
  );
}
export default TaskList;
