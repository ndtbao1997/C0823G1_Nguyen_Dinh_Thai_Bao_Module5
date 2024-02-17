import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";

function App() {
  const formSchema = Yup.object({
    name: Yup.string().required("Không được để trống"),
    email: Yup.string().required("Không được để trống"),
    phone: Yup.string().required("Không được để trống"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        validationSchema={formSchema}
        onSubmit={() => {
          alert("Thành công");
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name"></Field>
            <ErrorMessage
              name="name"
              component="span"
              className="error-mes"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="text" id="email" name="email"></Field>
            <ErrorMessage
              name="email"
              component="span"
              className="error-mes"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <Field type="text" id="phone" name="phone"></Field>
            <ErrorMessage
              name="phone"
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

export default App;
