import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Dummy from './components/dummy'

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import HouseIcon from '@material-ui/icons/House';
import KitchenIcon from '@material-ui/icons/Kitchen';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import BuildIcon from '@material-ui/icons/Build';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';


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
    cat: false,
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
          label="Housing"
          icon={<HouseIcon />}
          clickable
          color="primary"
          onClick={handleClick}
          disabled={off}
          />
          &nbsp;
          <Chip
          label="Food"
          icon={<KitchenIcon />}
          clickable
          color="primary"
          onClick={handleClick2}
          disabled={off}
          />
          &nbsp;
          <Chip
          icon={<AccessibilityIcon />}
          label="Clothing"
          clickable
          color="primary"
          onClick={handleClick3}
          disabled={off}
          />
          &nbsp;
        <Chip
          icon={<LocalPharmacyIcon />}
          label="Medical Supplies"
          clickable
          color="primary"
          onClick={handleClick3}
          disabled={off}
          />
          &nbsp;
        <Chip
          icon={<BuildIcon />}
          label="Household Items "
          clickable
          color="primary"
          onClick={handleClick3}
          disabled={off}
          />
          &nbsp;
        <Chip
          icon={<RecordVoiceOverIcon />}
          label="Counseling"
          clickable
          color="primary"
          onClick={handleClick3}
          disabled={off}
          />
          &nbsp;





        <hr />
        {offer.map((item, key) =>
        <Dummy 
         key={item.name} title={item.name} text={item.text} img={item.img} location={item.location}
         house={item.house} food={item.food} clothing={item.clothing} med={item.med} items={item.items}
         couns={item.couns} contact={item.contact} roomSize={item.roomSize} length={item.length}
         dog={item.dog} cat={item.cat}
        />
        )}
        
      
    </div>
  );
}

export default App;
