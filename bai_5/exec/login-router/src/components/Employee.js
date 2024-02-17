import React, { useParams } from "react-router-dom";

export function Employee() {
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
  const { index } = useParams();

  let emp = employees[index];
  return <div>{emp.id}</div>;
}
