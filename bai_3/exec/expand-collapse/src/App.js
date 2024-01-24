import "./App.css";
import { Component } from "react";
import Expand from "./components/Expand";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false,
    };
  }

  open = () => {
    this.setState({
      isExpand: true,
    });
  };

  close = () => {
    this.setState({
      isExpand: false,
    });
  };

  render() {
    let comp;
    let button;
    if (!this.state.isExpand) {
      button = <button onClick={this.open}>Mở giới thiệu</button>;
      return (
        <div>
          <h1>Conditional Rendenring</h1>
          {button}
        </div>
      );
    } else {
      comp = <Expand />;
      button = <button onClick={this.close}>Đóng giới thiệu</button>;
      return (
        <div>
          <h1>Conditional Rendenring</h1>
          {button}
          {comp}
        </div>
      );
    }
  }
}

export default App;
