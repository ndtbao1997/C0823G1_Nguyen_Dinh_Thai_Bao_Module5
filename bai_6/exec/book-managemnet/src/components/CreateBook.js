import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function CreateBook() {
  const handleSchema = Yup.object({
    title: Yup.string().required("Required!!"),
    quantity: Yup.number("Quantity is not number!!").required("Required!!"),
  });

  const handleSubmit = (values) => {
    axios
      .post(
        "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books",
        values
      )
      .then((res) => {
        alert(`Create book ${JSON.stringify(res.data)} success!!!`);
        window.location.href = "/";
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div>
      <h1> Add new book</h1>
      <Formik
        initialValues={{
          title: "",
          quantity: "",
        }}
        validationSchema={handleSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="title">Title:</label>
            <br></br>
            <Field id="title" type="text" name="title"></Field>
            <ErrorMessage
              name="title"
              component="span"
              className="error-mes"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <br></br>
            <Field id="quantity" type="text" name="quantity"></Field>
            <ErrorMessage
              name="quantity"
              component="span"
              className="error-mes"
            ></ErrorMessage>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
