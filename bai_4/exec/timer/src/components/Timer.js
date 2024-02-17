import { useState, useEffect } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer !== 0) {
      const timerValue = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => {
        clearInterval(timerValue);
      };
    } else {
      alert("Kết thúc");
    }
  }, [timer]);

  return <h1>{timer}</h1>;
}
