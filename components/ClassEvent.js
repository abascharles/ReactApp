import {Component} from 'react';
class ClassEvent extends Component {
    // method to handle click as compared to functions in function based components
    handleClick(){
        console.log('Class based event handling')

    }
    render(){
        return (<div>
            This is a class based component
            <button onClick = { this.handleClick}>Click</button>
        </div>)
    }
}

export default ClassEvent