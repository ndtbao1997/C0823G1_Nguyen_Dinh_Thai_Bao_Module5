import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/action";
import { Link, useNavigate } from "react-router-dom";

export function Post() {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  });

  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/edit-post/${id}`);
  };

  let table = null;
  if (posts.length !== 0) {
    table = (
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleUpdate(post.id)}>Edit</button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1>Post</h1>
      <Link to="/add-post">
        <button>Add new post</button>
      </Link>
      {table}
    </div>
  );
}
