import { SAVE_USERS } from "../reducers/users";

export const fetchUsers = () => dispatch => {
  fetch("https://paddlr-test.herokuapp.com/api/users")
    .then(data => data.json())
    .then(users => dispatch(saveUsers(users)));
};

export const saveUsers = users => ({
  type: SAVE_USERS,
  payload: users,
});
