export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const getUsers = () => ({
  type: FETCH_USER,
});
export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});
