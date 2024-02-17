import React from "react";
import useIncrement from "./useIncrement";

export default function Counter1() {
  const [count, increment] = useIncrement(0);

  return (
    <div>
      <div>Counter: {count}</div>
      <div>
        <button onClick={() => increment(1)}>Add 1</button>
      </div>
    </div>
  );
}
