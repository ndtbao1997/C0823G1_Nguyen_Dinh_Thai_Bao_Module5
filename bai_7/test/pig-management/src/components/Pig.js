import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPigs } from "../redux/action/pigs";

export function Pig() {
  const pigs = useSelector((state) => state.pigs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPigs());
  }, [dispatch]);

  let table = null;
  if (pigs.length !== 0) {
    table = (
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Weight</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Number</th>
        </tr>
        {pigs.map((pig) => (
          <tr>
            <td>{pig.id}</td>
            <td>{pig.name}</td>
            <td>{pig.weight}</td>
            <td>{pig.age}</td>
            <td>{pig.gender}</td>
            <td>{pig.number}</td>
          </tr>
        ))}
      </table>
    );
  }

  return (
    <div>
      <h1>Pig list</h1>
      {table}
    </div>
  );
}
