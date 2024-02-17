import { DELETE_USER_SUCCESS, FETCH_USER_SUCCESS } from "./action";

const initialState = {
  users: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
    case DELETE_USER_SUCCESS:
      return { ...state, users: state.users.filter(u => u.id !== action.payload) };
    default:
      return state;
  }
};
