import React from "react";

function Counter(props) {
  return (
    <div>
      <span className={getClasses(props.counter.value)}>
        {getFormattedCount(props)}
      </span>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => props.onIncrement(props.counter.id)}
      >
        Increment
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.counter.id)}
      >
        Delete
      </button>
    </div>
  );

  function getFormattedCount(props) {
    return props.counter.value === 0 ? "Zero" : props.counter.value;
  }

  function getClasses(value) {
    let classes = "badge m-2 text-bg-";

    classes += value === 0 ? "warning" : "primary";

    return classes;
  }
}

export default Counter;
