// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile.js';
import Counter from './components/Counter.js';
import About from './components/About.js';
import Resume from './components/Resume.js';
import FunctionEvent from "./components/FunctionEvent.js";
import ClassEvent from "./components/ClassEvent";

function App() {
  return (
    <div className="App">
        <Hello/>
        <Message messagecontent = 'This is a message from props'/>

        {/*Using props inside a component*/}
        <Profile name = 'Abas'>
        <h3>This is  a child component</h3>
        </Profile>

        {/* State Component */}
        <Counter/>

        <About company = 'Codefiti'/>

        <Resume name = 'Abas Charles'/>

        {/* Event handling - Function Event*/}
        <FunctionEvent/>

        {/* Event handling - Function Event*/}
        <ClassEvent/>
    </div>
  );
}

export default App;
