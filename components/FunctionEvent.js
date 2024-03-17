function FunctionEvent (){
    // creating the function.
    function handleClick (){
        console.log('Button is clicked')
    }
    return (<div>
        Functional Components

        {/*Create onclick attribute pass the name of the function not with brackets as it will get executed automatically when the component is rendered*/}
        <button onClick={handleClick}>Click</button>
    </div>)
}

export default FunctionEvent;