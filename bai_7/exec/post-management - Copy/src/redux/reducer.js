import {
  ADD_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  FETCH_POST_SUCCESS,
} from "./action";

const initialState = {
  posts: [],
};
export const rootReducer = (state = initialState, action) => {
  let nposts = state.posts.slice();
  let post;
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return { ...state, posts: action.payload };
    case ADD_POST_SUCCESS:
      return { ...state, posts: [...state.posts, action.payload] };
    case EDIT_POST_SUCCESS:
      for (let i = 0; i < nposts.length; i++) {
        if (parseInt(nposts[i].id) === parseInt(action.payload.id)) {
          post = nposts[i];
        }
      }
      let index = nposts.indexOf(post);
      console.log(index);
      nposts[index] = action.payload;
      return { ...state, posts: nposts };
    default:
      return state;
  }
};
