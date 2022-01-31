import { ADD, REMOVE } from "./action.constants";

const INITIAL_STATE = {
  count: 0,
  tasks: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case REMOVE:
      return {
        ...state,
        tasks: [state.tasks.filter((element) => element !== action.payload)],
      };

    default:
      return state;
  }
};

export default reducer;
