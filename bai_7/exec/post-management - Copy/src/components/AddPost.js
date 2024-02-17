import { Formik, Form, ErrorMessage, Field } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addPost, editPost } from "../redux/action";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export function AddPost() {
  const handleSchema = Yup.object({
    title: Yup.string().required("Required!!!"),
    body: Yup.string().required("Required!!"),
  });

  const { id } = useParams();

  const isCreate = !id;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    if (isCreate) {
      dispatch(addPost(values));
    } else {
      values = { ...values, id };
      dispatch(editPost(values));
    }
    navigate(`/`);
  };

  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          title: post.title || "",
          body: post.body || "",
        }}
        validationSchema={handleSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="title">Title:</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage
              name="title"
              component="span"
              className="err-mes"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="body">Content:</label>
            <Field type="text" id="body" name="body" />
            <ErrorMessage
              name="body"
              component="span"
              className="err-mes"
            ></ErrorMessage>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
