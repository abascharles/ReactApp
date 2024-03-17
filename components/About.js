// Destructuring props in function based components - ES6 specific.


function About(props){
    // destructuring objects
    const{name} = props;
    return <h2>About our company: {company} </h2>
}

export default About;