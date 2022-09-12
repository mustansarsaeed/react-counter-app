import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';


class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 4},
        {id: 4, value: 0}
      ]
  } 
  handleReset = () => {
    const counters = this.state.counters.map (counter => {
        counter.value = 0;
        return counter;
    })
    this.setState({counters})
  };

  handleIncrement = (counter) => {
      // const counters = [...this.state.counters];
      // const index = counters.indexOf(counter);
      // counters[index].value = counter.value + 1;
      // this.setState({counters});

      // const counters = [...this.state.counters];
      const counters = this.state.counters;
      const index = counters.indexOf(counter);
      
      counters[index] = {...counter}
      counters[index].value ++;
      console.log(this.state.counters[index])
      this.setState({counters});
  };

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(counter => counter.id !== counterId);
      this.setState({counters})
  };

  render() { 
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters.filter(counter => counter.value > 0).length}/>
        <main className='container'>
          <Counters 
          onDelete={this.handleDelete} onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App
;