import React from "react";

function CalculatorComponent(props) {
  if (props.first === "" || props.seconds === "") {
    return <h1>Result:</h1>;
  }
  if (isNaN(parseInt(props.first)) || isNaN(parseInt(props.seconds))) {
    return <h1>Không thể thực hiện được phép tính</h1>;
  }

  switch (props.aa) {
    case "+":
      return <h1>Result: {parseInt(props.first) + parseInt(props.seconds)}</h1>;
    case "-":
      return <h1>Result: {parseInt(props.first) - parseInt(props.seconds)}</h1>;
    case "*":
      return <h1>Result: {parseInt(props.first) * parseInt(props.seconds)}</h1>;
    case "/":
      return <h1>Result: {parseInt(props.first) / parseInt(props.seconds)}</h1>;
    default:
      return <h1>Result:</h1>;
  }
}

export default CalculatorComponent;
