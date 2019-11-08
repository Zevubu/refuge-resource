import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


function App() {
  const [off,setOff] = useState(false);
  
  const handleClick = () =>{
  off ? setOff(false) : setOff(true);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Chip
          avatar={<Avatar>D</Avatar>}
          label="Dummy"
          clickable
          color="primary"
          onClick={handleClick}
          disabled={off}
          />
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
