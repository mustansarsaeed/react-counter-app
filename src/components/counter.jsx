// import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Counter extends Component {
    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }; 

    // constructor() {
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render() { 
        return (
            <div>
                {/* <h4>{this.props.id}</h4> */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn-danger btn-sm m-2">Delete</button>
            </div>
         );
    };

    formatCount() {
        return (this.props.counter.value === 0) ? "Zero" : this.props.counter.value;

    };

    getBadgeClasses() {
        let classes = "badge m-2 "

        classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";

        return classes;
    };
}
 
export default Counter 