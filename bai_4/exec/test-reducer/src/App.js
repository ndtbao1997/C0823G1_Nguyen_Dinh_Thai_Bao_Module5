import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action) {
    case "Tang":
      return state + 1;
    case "Giam":
      return state - 1;
    case "Xoa":
      return 0;
    default:
      return state;
  }
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case "Gan":
      return action.data;
    default:
      return state;
  }
};

const initState = { loading: false, data: [], error: null };

const userReducer = (state, action) => {
  switch (action.type) {
    case "request":
      return {
        ...state,
        loading: true,
      };
    case "success":
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case "error":
      return {
        ...state,
        data: [],
        error: action.data,
      };
    default:
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer2, 0);
  const [user, userDispatch] = useReducer(userReducer, initState);
  const getUser = () => {
    userDispatch({
      type: "request",
    });
    setTimeout(() => {
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((res) => userDispatch({ type: "success", data: res }))
        .catch((err) => userDispatch({ type: "error", data: err }));
    }, 5000);
  };
  return (
    <div>
      <div>
        <div>{count}</div>
        <button onClick={() => dispatch("Tang")}>Tang</button>
        <button onClick={() => dispatch("Giam")}>Giam</button>
        <button onClick={() => dispatch("Xoa")}>Xoa</button>
      </div>
      <div>
        <div>{count2}</div>
        <button
          onClick={() =>
            dispatch2({
              type: "Gan",
              data: 10,
            })
          }
        >
          Gan
        </button>
      </div>
      <div>
        <div>
          {user.loading ? <p>loading...</p> : <p>{JSON.stringify(user)}</p>}
        </div>
        <button onClick={getUser}>Get user</button>
      </div>
    </div>
  );
}

export default App;
