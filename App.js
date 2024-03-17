// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Message from './components/Message'
import Profile from './components/Profile.js'

function App() {
  return (
    <div className="App">
      <Hello/>
        <Message messagecontent = 'This is a message from props'/>

        {/*Using props inside a component*/}
        <Profile name = 'Abas'>
        <h3>This is  a child component</h3>
        </Profile>

    </div>
  );
}

export default App;
