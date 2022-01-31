import { DECREMENT, INCREMENT } from "./action.constants";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const addTask = (task) => {
  return {
    type: DECREMENT,
    payload: task,
  };
};
