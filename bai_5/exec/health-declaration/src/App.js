import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

function App() {
  const SEX_LIST = [
    { label: "Nam", value: "male" },
    { label: "Nữ", value: "female" },
  ];

  const REGEX = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
  };

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      const checkedValue = e.target.value;
      const listChecked = form[e.target.name] ? [...form[e.target.name]] : [];

      if (e.target.checked) {
        listChecked.push(checkedValue);
      } else {
        let index = listChecked.indexOf(checkedValue);
        if (index > -1) {
          listChecked.splice(index, 1);
        }
      }
      setForm({
        ...form,
        [e.target.name]: listChecked,
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
    console.log(form);
  };

  const handleValidate = () => {
    const errors = {};
    if (!form.name) {
      errors.name = "Không được để trống!!";
    }
    if (!form.cmnd) {
      errors.cmnd = "Không được để trống!!";
    }
    if (!form.date) {
      errors.date = "Không được để trống!!";
    } else {
      let arr = form.date.split("-");
      if (arr[0] < 1900) {
        errors.date = "Năm sinh phải lớn hơn 1900";
      }
    }
    if (!form.country) {
      errors.country = "Không được để trống!!";
    }
    if (!form.city) {
      errors.city = "Không được để trống!!";
    }
    if (!form.district) {
      errors.district = "Không được để trống!!";
    }
    if (!form.ward) {
      errors.ward = "Không được để trống!!";
    }
    if (!form.group) {
      errors.group = "Không được để trống!!";
    }
    if (!form.phone) {
      errors.phone = "Không được để trống!!";
    }
    if (!form.email) {
      errors.email = "Không được để trống!!";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Email không hợp lệ!!";
    }
    return errors;
  };

  const handleSubmit = () => {
    alert("Bạn đã gửi khai báo thành công!!");
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
            <div>
              <h1>Tờ khai y tế</h1>
              <div>
                <label htmlFor="name">Họ tên:</label>
                <br></br>
                <input
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  value={form.name || ""}
                  onChange={handleChange}
                ></input>
                <p style={{ color: "red" }}>{errors.name}</p>
              </div>
              <div>
                <label htmlFor="cmnd">Số hộ chiếu/CMND:</label>
                <br></br>
                <input
                  className="input"
                  type="text"
                  id="cmnd"
                  name="cmnd"
                  value={form.cmnd || ""}
                  onChange={handleChange}
                ></input>
                <p style={{ color: "red" }}>{errors.cmnd}</p>
              </div>
              <div>
                <label htmlFor="date">Năm sinh</label>
                <br></br>
                <input
                  className="input"
                  type="date"
                  id="date"
                  name="date"
                  value={form.date || ""}
                  onChange={handleChange}
                ></input>
                <p style={{ color: "red" }}>{errors.date}</p>
              </div>
              <div>
                <label htmlFor="sex">Giới tính</label>
                {SEX_LIST.map((a) => (
                  <div key={a.value}>
                    <input
                      type="radio"
                      name="sex"
                      value={a.value}
                      onChange={handleChange}
                    ></input>
                    <label htmlFor={a.value}>{a.label}</label>
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="country">Quốc tịch:</label>
                <br></br>
                <input
                  className="input"
                  type="text"
                  id="country"
                  name="country"
                  value={form.country || ""}
                  onChange={handleChange}
                ></input>
                <p style={{ color: "red" }}>{errors.country}</p>
              </div>
              <div>
                <label htmlFor="company">Công ty làm việc:</label>
                <br></br>
                <input
                  className="input"
                  type="text"
                  id="company"
                  name="company"
                  value={form.company || ""}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label className="input" htmlFor="part">
                  Bộ phận làm việc:
                </label>
                <br></br>
                <input
                  className="input"
                  type="text"
                  id="part"
                  name="part"
                  value={form.part || ""}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="yes">Có thẻ bảo hiểm y tế:</label>
                <input
                  type="checkbox"
                  id="yes"
                  name="yes"
                  value="yes"
                  onChange={handleChange}
                ></input>
                <input
                  type="checkbox"
                  id="yes"
                  name="yes"
                  value="aaaa"
                  onChange={handleChange}
                ></input>
                <input
                  type="checkbox"
                  id="yes"
                  name="yes"
                  value="bbbb"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div>
              <h1>Địa chỉ liên lạc tại Việt Nam</h1>
              <div>
                <label htmlFor="city">Tỉnh thành:</label>
                <br></br>
                <input
                  className="input"
                  type="text"
                  id="city"
                  name="city"
                  value={form.city || ""}
                  onChange={handleChange}
                ></input>
                <p style={{ color: "red" }}>{errors.city}</p>
              </div>
              <div>
                <label htmlFor="district">Quận/huyện:</label>
                <br></br>
                <input
                  className="input"
                  type="text"
                  id="district"
                  name="district"
                  value={form.district || ""}
                  onChange={handleChange}
                ></input>
                <p style={{ color: "red" }}>{errors.district}</p>
              </div>
              <div>
                <label htmlFor="ward">Phường/xã:</label>
                <br></br>
                <input
                  className="input"
                  type="text"
                  id="ward"
                  name="ward"
                  value={form.ward}
                  onChange={handleChange}
                ></input>
                <p style={{ color: "red" }}>{errors.ward}</p>
              </div>
              <div>
                <label htmlFor="group">Số nhà/tổ dân phố/tổ đội/thôn:</label>
                <br></br>
                <input
                  className="input"
                  type="text"
                  id="group"
                  name="group"
                  value={form.group}
                  onChange={handleChange}
                ></input>
                <p style={{ color: "red" }}>{errors.group}</p>
              </div>
              <div>
                <label htmlFor="phone">Số điện thoại:</label>
                <br></br>
                <input
                  className="input"
                  type="text"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                ></input>
                <p style={{ color: "red" }}>{errors.phone}</p>
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <br></br>
                <input
                  className="input"
                  type="text"
                  id="email"
                  name="email"
                  value={form.email || ""}
                  onChange={handleChange}
                ></input>
                <p style={{ color: "red" }}>{errors.email}</p>
              </div>
            </div>
            <button type="submit">Gửi khai báo</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
