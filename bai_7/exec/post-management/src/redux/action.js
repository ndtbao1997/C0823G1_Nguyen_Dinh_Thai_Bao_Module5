import axios from "axios";

export const FETCH_POST = "FETCH_USER";
export const FETCH_POST_SUCCESS = "FETCH_USER_SUCCESS";
export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const EDIT_POST = "EDIT_POST";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";

export const getUser = () => {
  return async (dispatch) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    dispatch({
      type: FETCH_POST_SUCCESS,
      payload: res.data,
    });
  };
};

export const addPost = (values) => {
  return async (dispatch) => {
    try {
      await axios.post(`https://jsonplaceholder.typicode.com/posts`, values);
      dispatch({
        type: ADD_POST_SUCCESS,
        payload: values,
      });
      alert("OK!!");
    } catch (err) {
      console.log(err);
    }
  };
};

export const editPost = (values) => {
  return async (dispatch) => {
    let id = parseInt(values.id);
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        values
      );
      await dispatch({
        type: EDIT_POST_SUCCESS,
        payload: values,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
