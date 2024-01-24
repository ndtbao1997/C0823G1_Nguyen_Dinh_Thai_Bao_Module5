import "./App.css";
import { Component } from "react";
import "./Student.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      form: { name: "", phone: "", email: "" },
      isValid: false,
      indexSlt: -1,
    };
  }

  handleChange = (event) => {
    this.setState(
      (state) => {
        const form = state.form;
        form[event.target.name] = event.target.value;
        return { form };
      },
      () => this.checkInvalidForm()
    );
  };

  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form;
    const value = name && phone && email;
    this.setState({
      isValid: value,
    });
  };

  handleSubmit = () => {
    if (this.state.indexSlt === -1) {
      if (this.state.isValid) {
        const newStudent = this.state.form;
        this.setState({
          studentList: [...this.state.studentList, newStudent],
          form: { name: "", phone: "", email: "" },
          isValid: false,
        });
      }
    } else {
      if (this.state.isValid) {
        const newList1 = this.state.studentList.slice();
        newList1[this.state.indexSlt] = this.state.form;
        this.setState({
          studentList: newList1,
          form: { name: "", phone: "", email: "" },
          isValid: false,
          indexSlt: -1,
        });
      }
    }
  };

  handleDelete = (index) => {
    let newList = this.state.studentList.slice();
    console.log(index);
    newList.splice(index, 1);
    this.setState({
      studentList: newList,
    });
  };

  handleSelect = (index) => {
    const updateStudent = { ...this.state.studentList[index] };
    this.setState({
      form: updateStudent,
      indexSlt: index,
      isValid: true,
    });
  };

  render() {
    let list1 = null;
    let table = null;
    if (this.state.studentList.length !== 0) {
      list1 = this.state.studentList;
      table = (
        <table>
          <tr>
            <td>Stt</td>
            <td>Name</td>
            <td>Phone</td>
            <td>Mail</td>
            <td>Sửa</td>
            <td>Xóa</td>
          </tr>
          {list1.map((a, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{a.name}</th>
              <th>{a.phone}</th>
              <th>{a.email}</th>
              <th>
                <button onClick={() => this.handleSelect(index)}>Sửa</button>
              </th>
              <th>
                <button onClick={() => this.handleDelete(index)}>Xóa</button>
              </th>
            </tr>
          ))}
        </table>
      );
    }
    return (
      <div>
        <h1>Student List</h1>
        <table>
          <tr>
            <th>Name:</th>
            <th>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.form.name}
              ></input>
            </th>
          </tr>
          <tr>
            <th>Phone:</th>
            <th>
              <input
                type="text"
                name="phone"
                onChange={this.handleChange}
                value={this.state.form.phone}
              ></input>
            </th>
          </tr>
          <tr>
            <th>Email:</th>
            <th>
              <input
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.form.email}
              ></input>
            </th>
          </tr>
          <tr>
            <th>
              <button onClick={this.handleSubmit}>Submit</button>
            </th>
            <th></th>
          </tr>
        </table>
        {table}
      </div>
    );
  }
}

export default App;
