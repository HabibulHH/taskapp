import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useAddItem from "../hooks/useAddItem";
const TaskItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

function TaskItem({ name, status }) {
  return (
    <TaskItemContainer>
      <div>{name}</div>
      <div>{status === 1 ? "done" : "undone"}</div>
      <div>
        <button onClick={() => {}}>Edit</button>
        <button onClick={() => {}}>Delete</button>
      </div>
    </TaskItemContainer>
  );
}

TaskItem.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
};
export default TaskItem;
