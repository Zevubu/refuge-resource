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
  const [offer, setOffer] = useState([{
    name: 'Andrew Tocchi',
    contact: 'andrewtocchi@gmail.com',
    location: 'Oakland',
    house: true,
    roomSize: 2,
    length: '1 month',
    dog: true,
    cat: true,
    med: true,
    food: true,
    clothing: true,
    items: true,
    couns: true,
    img: 'https://i.imgur.com/HSdYMMN.jpg',
    text: 'Lorem Ipsum Canus Noctus Ignus Ambulus Barkus',
    more: 'No More Info'
  },{
  name: 'Goofus Gallant',
  contact: 'andrewtocchi@gmail.com',
  location: 'Nowhere',
  house: false,
  roomSize: 2,
  length: '1 month',
  dog: true,
  cat: true,
  med: false,
  food: true,
  clothing: false,
  items: false,
  couns: false,
  img: 'https://i.imgur.com/HSdYMMN.jpg',
  text: 'Sorry I can only offer a Single Hamburger ',
  more: 'No More Info'}
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
          avatar={<Avatar>H</Avatar>}
          label="Housing"
          clickable
          color="primary"
          onClick={handleClick}
          disabled={off}
          />

          <Chip
          avatar={<Avatar>F</Avatar>}
          label="Food"
          clickable
          color="primary"
          onClick={handleClick2}
          disabled={off}
          />

          <Chip
          avatar={<Avatar>C</Avatar>}
          label="Clothing"
          clickable
          color="primary"
          onClick={handleClick3}
          disabled={off}
          />






        {offer.map((item, key) =>
        <Dummy 
         key={item.name} title={item.name} text={item.text} img={item.img} location={item.location}
         house={item.house} food={item.food} clothing={item.clothing} med={item.med} items={item.items}
         couns={item.couns} contact={item.contact}
        />
        )}
        
      
    </div>
  );
}

export default App;
