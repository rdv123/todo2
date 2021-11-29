import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  
  render() {
    const { onActive, onDone, onAll } = this.props;
    console.log("aaa", { onActive });

    let classNameButton = "btn";
    
    // toggleButton =()=>{

    // }
    //     classNameButton += " btn-info";
    //     classNameButton += " btn-outline-secondary";

    return (
      <div className="btn-group">
        <button
          key="All"
          type="button"
          className={classNameButton}
          onClick={this.buttonAll}
        >
          All
        </button>
        <button
          key="Active"
          type="button"
          className={classNameButton}
          onClick={onActive}
        >
          Active
        </button>
        <button
          key="Done"
          type="button"
          className={classNameButton}
          onClick={onDone}
        >
          Done
        </button>
      </div>
    );
  }
}
