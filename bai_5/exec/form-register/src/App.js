import React, { useState } from "react";
import { Formik } from "formik";
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
    if (!form.yourName) {
      errors.yourName = "Required";
    }
    if (!form.phone) {
      errors.phone = "Required";
    }
    if (!form.message) {
      errors.message = "Required";
    }
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const handleSubmit = () => {
    alert("Success!!!");
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
            <h1>Contact Form</h1>
            <label htmlFor="yourName">Name:</label>
            <br></br>
            <input
              type="text"
              id="yourName"
              name="yourName"
              value={form.yourName || ""}
              onChange={handleChange}
            ></input>
            <br></br>
            <p>{errors.yourName}</p>
            <label htmlFor="phone">Phone:</label>
            <br></br>
            <input
              type="text"
              id="phone"
              name="phone"
              value={form.phone || ""}
              onChange={handleChange}
            ></input>
            <br></br>
            <p>{errors.phone}</p>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input
              type="text"
              id="email"
              name="email"
              value={form.email || ""}
              onChange={handleChange}
            ></input>
            <br></br>
            <p>{errors.email}</p>
            <label htmlFor="message">Message:</label>
            <br></br>
            <textarea
              type="text"
              id="message"
              name="message"
              value={form.message || ""}
              onChange={handleChange}
            ></textarea>
            <br></br>
            <p>{errors.message}</p>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
