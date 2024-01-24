import React, { Component } from "react";
import CalculatorComponent from "./components/Calculator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      seconds: "",
      aa: "",
    };
  }
  cong = () => {
    this.setState({
      first: document.getElementById("first").value,
      seconds: document.getElementById("seconds").value,
      aa: "+",
    });
  };

  tru = () => {
    this.setState({
      first: document.getElementById("first").value,
      seconds: document.getElementById("seconds").value,
      aa: "-",
    });
  };

  nhan = () => {
    this.setState({
      first: document.getElementById("first").value,
      seconds: document.getElementById("seconds").value,
      aa: "*",
    });
  };

  chia = () => {
    this.setState({
      first: document.getElementById("first").value,
      seconds: document.getElementById("seconds").value,
      aa: "/",
    });
  };

  render() {
    return (
      <div>
        <input type="text" id="first"></input>
        <input type="text" id="seconds"></input>
        <button onClick={this.cong}>+</button>
        <button onClick={this.tru}>-</button>
        <button onClick={this.nhan}>*</button>
        <button onClick={this.chia}>/</button>
        <CalculatorComponent
          first={this.state.first}
          seconds={this.state.seconds}
          aa={this.state.aa}
        ></CalculatorComponent>
      </div>
    );
  }
}

export default App;
