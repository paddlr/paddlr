export const SAVE_USERS = "SAVE_USERS";

const initialState = {
  users: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default users;
