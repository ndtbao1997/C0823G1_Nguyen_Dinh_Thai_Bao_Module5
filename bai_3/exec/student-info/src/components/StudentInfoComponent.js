import React, { Component } from "react";

class StudentInfoComponent extends Component {
  render() {
    let students = [
      { id: 1, name: "Tiểu Vi", age: 20, address: "Đà nẵng" },
      { id: 2, name: "Tiểu Vi", age: 20, address: "Đà nẵng" },
    ];
    return (
      <table>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Age</td>
          <td>Address</td>
        </tr>
        {students.map((student) => (
          <tr>
            <th>{student.id}</th>
            <th>{student.name}</th>
            <th>{student.age}</th>
            <th>{student.address}</th>
          </tr>
        ))}
      </table>
    );
  }
}
export default StudentInfoComponent;
