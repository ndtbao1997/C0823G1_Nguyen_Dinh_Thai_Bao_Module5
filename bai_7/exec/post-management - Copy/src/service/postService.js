import axios from "axios";

const findAll = async () => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts`);
};

// const addPost = async (values) => {
//  try{
//    const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, values);
//  }
// };

// const editPost = (values) => {
//   return async (dispatch) => {
//     let id = parseInt(values.id);
//     try {
//       await axios.put(
//         `https://jsonplaceholder.typicode.com/posts/${id}`,
//         values
//       );
//       await dispatch({
//         type: EDIT_POST_SUCCESS,
//         payload: values,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

const postService = {
  findAll,
  //   addPost,
  //   editPost,
};

export default postService;
