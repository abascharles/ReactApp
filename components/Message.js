import{Component} from 'react'

// class Component
class Message extends Component {
render(){
    //props in class component
    return <h1>Message: {this.props.messagecontent}</h1>
}
}

// exporting component
export default  Message