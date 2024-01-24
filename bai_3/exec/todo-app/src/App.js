import "./App.css";
import { Component } from "react";
import ListTodo from "./components/ListTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  handleAddItem = () => {
    const { list, item } = this.state;
    if (item !== "") {
      this.setState({
        list: [...list, item],
        item: "",
      });
    }
  };

  render() {
    const { list } = this.state;
    let table = null;
    if (list.length !== 0) {
      table = <ListTodo list={list} />;
    }
    return (
      <div>
        <h1>Todo list</h1>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.item}
        />
        <button onClick={this.handleAddItem}>Add</button>
        {table}
      </div>
    );
  }
}

export default App;
