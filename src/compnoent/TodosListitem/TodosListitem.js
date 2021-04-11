import React, { Component } from "react";

export class TodosListitem extends Component {
  render() {
    return <div>{this.props.titel}</div>;
  }
}

export default TodosListitem;
