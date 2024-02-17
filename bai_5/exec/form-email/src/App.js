import { Formik } from "formik";
import { useState } from "react";
import "./App.css";

function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidate = () => {
    const errors = {};
    if (!form.to) {
      errors.to = "required";
    } else if (!REGEX.email.test(form.to)) {
      errors.email = "email not OK!!!";
    }
    if (!form.title) {
      errors.title = "required";
    }
    if (!form.message) {
      errors.message = "required";
    }
    if (!form.file) {
      errors.file = "required";
    }
    return errors;
  };

  const handleSubmit = () => {
    alert("Send a success!!!");
  };

  return (
    <div>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h1>Mail Form</h1>
            <div>
              <label htmlFor="to">To:</label>
              <br></br>
              <input
                type="text"
                id="to"
                name="to"
                onChange={handleChange}
              ></input>
              <p style={{ color: "red" }}>{errors.to}</p>
            </div>
            <div>
              <label htmlFor="title">Title:</label>
              <br></br>
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
              ></input>
              <p style={{ color: "red" }}>{errors.title}</p>
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <br></br>
              <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
              ></input>
              <p style={{ color: "red" }}>{errors.message}</p>
            </div>
            <div>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
              ></input>
              <p style={{ color: "red" }}>{errors.file}</p>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
