import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todoText: "",
    };
  }

  handleChanges = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleClear = () => {
    this.props.clearItem(this.state.todoText);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.todoText);
    this.setState({
      todoText: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo-input">Add Todo: </label>
          <input
            id="todo-input"
            name="todoText"
            value={this.state.todoText}
            onChange={this.handleChanges}
          />
          <button>Add Todo</button>
          <button onClick={this.props.clearItem}>Clear Todo</button>
        </form>
      </div>
    );
  }
}
