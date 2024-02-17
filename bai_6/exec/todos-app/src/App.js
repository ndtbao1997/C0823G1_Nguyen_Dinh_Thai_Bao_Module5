import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setUserList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let userListTable = null;
  if (userList.length !== 0) {
    userListTable = (
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {userList
            .filter((a) => a.userId === 1)
            .map((a) => (
              <tr key={a.id}>
                <td>{a.userId}</td>
                <td>{a.id}</td>
                <td>{a.title}</td>
                <td>{a.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <h1>Todos List</h1>
      <input type="text" name="todo" />
      <br />
      <button type="submit">Submit</button>
      {userListTable}
    </div>
  );
}

export default App;
