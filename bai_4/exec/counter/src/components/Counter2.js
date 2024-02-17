import React from "react";
import useIncrement from "./useIncrement";

export default function Counter2() {
  const [count, increment] = useIncrement(0);

  return (
    <div>
      <div>Counter: {count}</div>
      <div>
        <button onClick={() => increment(2)}>Add 2</button>
      </div>
    </div>
  );
}
