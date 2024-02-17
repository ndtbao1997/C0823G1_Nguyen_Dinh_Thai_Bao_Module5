import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Library() {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        " https://my-json-server.typicode.com/codegym-vn/mock-api-books/books"
      )
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (deleteID) => {
    if (deleteID !== 0) {
      if (window.confirm(`You sure delete ${deleteID}???`)) {
        axios
          .delete(
            `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${deleteID}`
          )
          .then((res) => {
            alert(`Delete book ${JSON.stringify(res.data)} success!!!`);
            console.log(res);
          });
      }
    }
  };

  let booksTable = null;
  if (books.length !== 0) {
    booksTable = (
      <table>
        <tr>
          <th>STT</th>
          <th>Title</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
        {books.map((book, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{book.title}</td>
            <td>{book.quantity}</td>
            <td>
              <button
                onClick={() => {
                  navigate(`/edit/${book.id}`);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleDelete(book.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }

  return (
    <div>
      <h1>Library</h1>
      <div>
        <Link to="/create">
          <button>Add new book</button>
        </Link>
      </div>
      {booksTable}
    </div>
  );
}
