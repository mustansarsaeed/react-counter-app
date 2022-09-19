import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {};
  render(props) {
    return (
      <div>
        {props.counters.map((counter) => (
          <Counter />
        ))}
        ;
      </div>
    );
  }
}

export default Counters;
