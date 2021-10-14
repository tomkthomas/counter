import React, { Component } from 'react';

class Counter extends Component {
    

    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };   

    render() { 
        return (
        <div>
            
            <span className= {this.classDetermine()}>{this.props.counter.value}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm">
                    + 
            </button>
            <button onClick = {() => this.props.onDecrement(this.props.counter)}
                className="btn btn-primary btn-sm m-2">
                -
            </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2" >
                 Delete
            </button>
        </div>
        );
    }

    classDetermine() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;