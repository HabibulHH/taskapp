import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { removeTask } from "../redux/action";
import { useDispatch } from "react-redux";

const TaskItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

function TaskItem({ name, status, id }) {
  const dispatcher = useDispatch();
  return (
    <TaskItemContainer>
      <div>{name}</div>
      <div>{status === 1 ? "done" : "undone"}</div>
      <div>
        <button onClick={() => {}}>Edit</button>
        <button
          onClick={() => {
            dispatcher(removeTask(id));
          }}
        >
          Delete
        </button>
      </div>
    </TaskItemContainer>
  );
}

TaskItem.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
};
export default TaskItem;
