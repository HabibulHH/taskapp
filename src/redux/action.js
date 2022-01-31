import { ADD, REMOVE } from "./action.constants";

export const addTask = (task) => {
  return {
    type: ADD,
    payload: task,
  };
};
export const removeTask = (taskId) => {
  return {
    type: REMOVE,
    payload: taskId,
  };
};
