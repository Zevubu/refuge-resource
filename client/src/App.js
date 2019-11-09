import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Dummy from './components/dummy'

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


function App() {
  //using Hooks instead of classes to set state
  const [off,setOff] = useState(false);
  const [rend1,setRend1] = useState(true);
  const [rend2,setRend2] = useState(true);
  const [rend3,setRend3] = useState(true);
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
  // off ? setOff(false) : setOff(true);
  setRend1(false);
  }

  const handleClick2 = () =>{
    // off ? setOff(false) : setOff(true);
    setRend2(false);
    }

  const handleClick3 = () =>{
    // off ? setOff(false) : setOff(true);
    setRend3(false);
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

          <Chip
          avatar={<Avatar>D2</Avatar>}
          label="Dummy2"
          clickable
          color="primary"
          onClick={handleClick2}
          disabled={off}
          />

          <Chip
          avatar={<Avatar>D3</Avatar>}
          label="Dummy3"
          clickable
          color="primary"
          onClick={handleClick3}
          disabled={off}
          />






        {dum.map((item, key) =>
        <Dummy 
        rend1={rend1} rend2={rend2} rend3={rend3} key={item.title} title={item.title} text={item.text} img={item.img} bol={item.bol1} bol2={item.bol2} bol3={item.bol3}
        />
        )}
        
      
    </div>
  );
}

export default App;
