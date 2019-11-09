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
  const [dum, setDum] = useState([{
    title: 'Dummy',
    bol1: true,
    bol2: false,
    bol3: false,
    text: 'Lorem Ipsum arambum noculus ispum lorem aramabos amululant epsum ONE ',
    img: 'https://i.imgur.com/Gc1NSVZ.png'
  },{
    title: 'Dummy2',
    bol1: false,
    bol2: true,
    bol3: false,
    text: 'Lorem Ipsum arambum noculus ispum lorem aramabos amululant epsum TWO',
    img: 'https://i.imgur.com/Gc1NSVZ.png'
  },
  {
    title: 'Dummy3',
    bol1: false,
    bol2: false,
    bol3: true,
    text: 'Lorem Ipsum arambum noculus ispum lorem aramabos amululant epsum THREE',
    img: 'https://i.imgur.com/Gc1NSVZ.png'
  }
])

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
        {dum.map((item, key) =>
        <Dummy 
        key={item.title} title={item.title} text={item.text} img={item.img} bol={item.bol1} bol2={item.bol2} bol3={item.bol3}
        />
        )}
        
      
    </div>
  );
}

export default App;
