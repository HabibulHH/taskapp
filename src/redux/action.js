import {
  ADD,
  ITEM_SELECTED_FOR_EDIT,
  REMOVE,
  UPDATE,
} from "./action.constants";

export const addTask = (task) => {
  return {
    type: ADD,
    payload: task,
  };
};

export const update = (task) => {
  return {
    type: UPDATE,
    payload: task,
  };
};
export const removeTask = (taskId) => {
  return {
    type: REMOVE,
    payload: taskId,
  };
};
export const selectTaskToBeEdited = (task) => {
  return {
    type: ITEM_SELECTED_FOR_EDIT,
    payload: task,
  };
};
