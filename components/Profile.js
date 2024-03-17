

//function components
function Profile(props) {
    //Using props inside a function component
    return <h1>Name: {props.name} {props.children}</h1>
}


export default Profile;