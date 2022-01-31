import { ADD, DECREMENT, INCREMENT } from "./action.constants";

const INITIAL_STATE = {
  count: 0,
  tasks: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case ADD:
      return {
        ...state,
        tasks: [...this.state.tasks, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
