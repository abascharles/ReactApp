import {Component} from 'react';
// state is an object and needs to be initialized inside a constructor
class Counter extends Component{
    // Initializing state
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
    }

    increment(){
       //To change the value of the state use 'this.setState' method
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    // Methods
    /*Event binding*/
    decrement=() => {
        this.setState({
            counter: this.state.counter -1,
        })
    }
    render(){
        return (<div>
            <h3>Count value is: {this.state.counter} </h3>
            <button onClick={()=>this.increment()}> Increment</button> <br/>
            {/*Recommended Event binding*/}

            <button onClick={this.decrement}> Decrement</button>

        </div>)

    }
}


export default Counter;