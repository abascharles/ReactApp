import{Component} from 'react';

class Resume extends Component {
    render(){

        // Destructuring props in class based components
        const{name} = this.props;
        return <h1>This is resume for: {name}</h1>
    }
}


export default Resume;
