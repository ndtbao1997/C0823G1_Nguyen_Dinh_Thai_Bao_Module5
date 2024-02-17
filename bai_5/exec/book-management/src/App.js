import { Formik } from "formik";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({});

  const [listBook, setListBook] = useState([]);

  const [select, setSelect] = useState(-1);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidate = () => {
    const errors = {};
    if (!form.title) {
      errors.title = "Required";
    }
    if (!form.quantity) {
      errors.quantity = "Required";
    } else if (!Number(form.quantity)) {
      errors.quantity = "Quantity is not number!!!";
    }
    return errors;
  };

  const handleSubmit = () => {
    if (select !== -1) {
      listBook[select] = form;
      setSelect(-1);
      setForm({});
      alert("Update book is success!!!");
    } else {
      setListBook([...listBook, form]);
      setForm({});
      alert("Add book is success!!!");
    }
  };

  const handleSelect = (index) => {
    setSelect(index);
    setForm(listBook[index]);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete???")) {
      const updatedList = [...listBook];
      updatedList.splice(index, 1);
      setListBook(updatedList);
      alert("Delete book is success!!!");
    }
  };

  let list = null;

  if (listBook.length !== 0) {
    list = (
      <div>
        <table>
          <tr>
            <td>STT</td>
            <td>Title</td>
            <td>Quantity</td>
            <td>Actions</td>
          </tr>
          {listBook.map((a, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{a.title}</td>
              <td>{a.quantity}</td>
              <td>
                <button onClick={() => handleSelect(index)}>Update</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
  return (
    <div>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h1>Book management</h1>
            <div>
              <label htmlFor="title">Title:</label>
              <br></br>
              <input
                type="text"
                name="title"
                id="title"
                value={form.title || ""}
                onChange={handleChange}
              ></input>
              <p style={{ color: "red" }}>{errors.title}</p>
            </div>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <br></br>
              <input
                type="text"
                name="quantity"
                id="quantity"
                value={form.quantity || ""}
                onChange={handleChange}
              ></input>
              <p style={{ color: "red" }}>{errors.quantity}</p>
            </div>
            <button>Submit</button>
          </form>
        )}
      </Formik>
      {list}
    </div>
  );
}

export default App;
