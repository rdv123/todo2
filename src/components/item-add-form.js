import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  onLabelChange = (e) => {
    console.log(e.target.value);
  };
  render() {
    return (
      <form className="item-add-form d-flex">
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
        />
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.onItemAdded("hello world")}
        >
          Add Item
        </button>
      </form>
    );
  }
}
