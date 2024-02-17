import React, { Link, useNavigate, useParams } from "react-router-dom";

export function User() {
  const navigate = useNavigate();
  const { userEmail } = useParams();
  const employees = [
    {
      id: 1,
      name: "Hoa",
      age: 20,
    },
    {
      id: 2,
      name: "Khánh",
      age: 25,
    },
    {
      id: 3,
      name: "Tú",
      age: 22,
    },
  ];

  const empTable = (
    <table>
      <tr>
        <th>STT</th>
        <th>Name</th>
        <th>Details</th>
      </tr>
      {employees.map((emp, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{emp.name}</td>
          <td>
            <button onClick={() => navigate(`/user/${userEmail}/${index}`)}>
              Details
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
  return (
    <div>
      <h1>Hello {userEmail}</h1>
      <Link to="/">
        <button>Log out</button>
      </Link>
      {empTable}
    </div>
  );
}
