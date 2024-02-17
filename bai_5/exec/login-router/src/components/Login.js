import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleValidate = () => {
    const errors = {};
    if (!user.email) {
      errors.email = "Không được để trống!!";
    } else if (user.email !== "admin@gmail.com") {
      errors.email = "Đại chỉ email không tồn tại!!";
    }
    if (!user.password) {
      errors.password = "Không được để trống!!";
    } else if (user.password !== "letmein") {
      errors.password = "Mật khẩu không đúng";
    }
    return errors;
  };

  const handleSubmit = () => {
    alert("Bạn đã đăng nhập thành công!!");
    navigate(`/user/${user.email}`);
    setUser({});
  };

  return (
    <div>
      <Formik
        initialValues={user}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
              <label htmlFor="email">Email:</label>
              <br></br>
              <input
                type="text"
                name="email"
                value={user.email || ""}
                onChange={handleChange}
              ></input>
              <p style={{ color: "red" }}>{errors.email}</p>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <br></br>
              <input
                type="password"
                name="password"
                value={user.password || ""}
                onChange={handleChange}
              ></input>
              <p style={{ color: "red" }}>{errors.password}</p>
            </div>
            <button type="submit">Đăng nhập</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
