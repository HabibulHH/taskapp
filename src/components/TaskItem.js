import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeTask, selectTaskToBeEdited } from "../redux/action";

const TaskItemContainer = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const EditButton = styled.button`
  height: 25px;
  width: 39px;
  background: #6d726c;
  border: none;
  color: white;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
`;
const DeleteButton = styled.button`
  height: 25px;
  width: 60px;
  background: #ff7524;
  margin-left: 2px;
  border: none;
  color: white;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
`;
function TaskItem({ item }) {
  const dispatch = useDispatch();

  return (
    <TaskItemContainer>
      <div>{item.name}</div>
      <div>{item.status === 1 ? "done" : "undone"}</div>
      <div>
        <EditButton
          onClick={() => {
            dispatch(selectTaskToBeEdited(item));
          }}
        >
          Edit
        </EditButton>
        <DeleteButton
          onClick={() => {
            dispatch(removeTask(item.id));
          }}
        >
          Delete
        </DeleteButton>
      </div>
    </TaskItemContainer>
  );
}

TaskItem.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
};
export default TaskItem;
