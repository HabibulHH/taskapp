import {
  ADD,
  ITEM_SELECTED_FOR_EDIT,
  REMOVE,
  UPDATE,
} from "./action.constants";

const INITIAL_STATE = {
  count: 0,
  tasks: [],
  selectedItem: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload }],
      };

    case UPDATE:
      return {
        ...state,
        selectedItem: null,
        tasks: state.tasks.map((item) => {
          if (item.id === action.payload.id) {
            return { ...action.payload };
          } else return item;
        }),
      };
    case ITEM_SELECTED_FOR_EDIT:
      return {
        ...state,
        selectedItem: action.payload,
      };

    case REMOVE:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
