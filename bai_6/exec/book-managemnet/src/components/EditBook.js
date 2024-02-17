import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";

export default function EditBook() {
  const { id } = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    setData();
  }, [id]);

  const setData = () => {
    if (id) {
      axios
        .get(
          `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`
        )
        .then((res) => {
          setBook(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  const handleSchema = Yup.object({
    title: Yup.string().required("Required!!"),
    quantity: Yup.number("Quantity is not number!!").required("Required!!"),
  });

  const handleSubmit = (values) => {
    axios
      .put(
        `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`,
        values
      )
      .then((res) => {
        alert(`Edit book ${JSON.stringify(res.data)} success!!!`);
        window.location.href = "/";
        console.log(res.data);
      })
      .catch((err) => {
        throw err;
      });
  };
  // if (book) return <div>loading...</div>;
  return (
    <div>
      {console.log(book.title)}
      <h1> Edit book</h1>
      <Formik
        enableReinitialize={true}
        initialValues={{
          title: book.title,
          quantity: book.quantity,
        }}
        validationSchema={handleSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="title">Title:</label>
            <br></br>
            <Field id="title" type="text" name="title" />
            <ErrorMessage name="title" component="span" className="error-mes" />
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <br></br>
            <Field id="quantity" type="text" name="quantity" />
            <ErrorMessage
              name="quantity"
              component="span"
              className="error-mes"
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
