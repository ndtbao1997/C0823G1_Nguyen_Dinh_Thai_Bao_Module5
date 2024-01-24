import React, { Component } from "react";

class ListTodo extends Component {
  render(props) {
    const { list } = this.props;
    return (
      <table>
        <tr>
          <td>STT</td>
          <td>Todo</td>
        </tr>
        {list.map((a, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{a}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default ListTodo;
