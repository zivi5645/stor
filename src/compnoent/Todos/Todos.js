import React, { Component } from "react";
import TodosListitem from "../TodosListitem/TodosListitem";

export class Todos extends Component {
  state = {
    todos: [
      { id: 1, titel: "dfgh1" },
      { id: 2, titel: "dfgh2" },
      { id: 3, titel: "dfgh3" },
      { id: 4, titel: "dfgh4" },
    ],
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        {this.state.todos.map((todo) => (
          <TodosListitem id={todo.id} titel={todo.titel} />
        ))}
      </div>
    );
  }
}

export default Todos;
