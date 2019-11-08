import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Dummy from './components/dummy'

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


function App() {
  //using Hooks instead of classes to set state
  const [off,setOff] = useState(false);
  const [rend,setRend] = useState(true);

  const handleClick = () =>{
  off ? setOff(false) : setOff(true);
  setRend(false);
  }
  
  return (
    <div className="App">
      
      
          <Chip
          avatar={<Avatar>D</Avatar>}
          label="Dummy"
          clickable
          color="primary"
          onClick={handleClick}
          disabled={off}
          />
        
        <Dummy rend={rend}/>
        
        
      
    </div>
  );
}

export default App;
