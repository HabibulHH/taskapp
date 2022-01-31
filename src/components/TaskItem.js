import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeTask, selectTaskToBeEdited } from "../redux/action";

const TaskItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

function TaskItem({ item }) {
  const dispatch = useDispatch();

  return (
    <TaskItemContainer>
      <div>{item.name}</div>
      <div>{item.status === 1 ? "done" : "undone"}</div>
      <div>
        <button
          onClick={() => {
            dispatch(selectTaskToBeEdited(item));
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            dispatch(removeTask(item.id));
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
