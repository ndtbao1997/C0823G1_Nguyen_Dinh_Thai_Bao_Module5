import { useState } from "react";

export default function useIncrement() {
  const [count, setCount] = useState(0);
  const increment = (amount) => setCount(count + amount);
  return [count, increment];
}
