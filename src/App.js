import "./App.css";
import NavBar from "./components/NavBar";
import Counter from "./components/counter";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 0,
    },
  ]);

  return (
    <div>
      <NavBar
        countersLength={counters.filter((counter) => counter.value).length}
      />
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => handleOnReset()}
      >
        Reset
      </button>

      {counters.map((counter) => {
        return (
          <Counter
            onDelete={handleOnDelete}
            onIncrement={handleOnIncrement}
            key={counter.id}
            id={counter.id}
            counter={counter}
          />
        );
      })}
    </div>
  );

  function handleOnReset() {
    const updatedCounters = counters.map((counter) => {
      counter.value = 0;

      return counter;
    });
    // console.log("updated counters => " + updatedCounters);
    setCounters(updatedCounters);
  }

  function handleOnIncrement(counterId) {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value = counter.value + 1;
      }
      return counter;
    });
    // console.log("updated counters => " + updatedCounters);
    setCounters(updatedCounters);
  }

  function handleOnDelete(counterId) {
    const updatedCounters = counters.filter((counter) => {
      return counter.id !== counterId;
    });
    // console.log("updated counters => " + updatedCounters);
    setCounters(updatedCounters);
  }
}

export default App;
