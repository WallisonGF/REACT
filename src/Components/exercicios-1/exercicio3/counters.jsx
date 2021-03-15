import React, { Component }       from "react";
import Counter                    from "./counter.jsx";

export default class Counters extends Component {
  render() {
    //REFATORADO
    // const {
    //   onReset,
    //   onIncrement,
    //   onDelete,
    //   onDecrement,
    //   counters,
    //   onRestart
    // } = this.props;
    //SIMPLIFICADO
    // const onReset = this.props.onReset;
    // const onIncrement = this.props.onIncrement;
    // const onDelete = this.props.onDelete;
    // const onDecrement = this.props.onDecrement;
    // const counters = this.props.counters;
    // const onRestart = this.props.onRestart;
    return (
      <div>
      <center>
        <button
          className="btn btn-success m-2"
          onClick={this.props.onReset}
          disabled={this.props.counters.length === 0 ? "disabled" : ""}
        >
          <i className="fa fa-refresh fa-2x" aria-hidden="true" />
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={this.props.onRestart}
          disabled={this.props.counters.length !== 0 ? "disabled" : ""}
        >
          <i className="fa fa-recycle fa-2x" aria-hidden={true}></i>
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
        </center>
      </div>
    );
  }
}
