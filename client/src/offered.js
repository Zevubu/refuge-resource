import React, { useState, useEffect } from 'react';
import './App.css';
import Dummy from './components/dummy'
// import Nav from './components/Nav'
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NeededForm from "./pages/forms/neededForm"
// import OfferedForm from "./pages/forms/offeredForm"

// import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import PetsIcon from '@material-ui/icons/Pets';
import HouseIcon from '@material-ui/icons/House';
import KitchenIcon from '@material-ui/icons/Kitchen';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import BuildIcon from '@material-ui/icons/Build';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

import Axios from 'axios';
// import neededForm from './pages/forms/neededForm';
// var offeredPosts = [];


function Offered() {
    //using Hooks instead of classes to set state

        const [off, setOff] = useState(true);

        const [search, setSearch] = useState({
            housing: true,
            medical: true,
            nutrients: true,
            clothes: true,
            supplies: true,
            counseling: true,
            other: true,
            dogs: true,
            cats: true
        });

        const [offer, setOffer] = useState([
            {
              "house": true,
              "dog": false,
              "cat": false,
              "med": false,
              "food": false,
              "clothing": false,
              "items": false,
              "couns": false,
              "other": false,
              "img": [
                "https://dsmpublicartfoundation.org/wp-content/uploads/1970/01/3579-Louis-Vuitton-Crack-House-Jordan-Weber.jpg"
              ],
              "_id": "5dd6597e0daaf643eda156e3",
              "name": "Zevs",
              "contact": "email@email.com",
              "location": "oaktown",
              "roomSize": 2,
              "stayLength": "3 month",
              "text": "I have stuff to say!",
              "more": "string beans and rice!",
              "__v": 0
            }
        ]);

        useEffect(() => {
            async function getPosts () {
            const response = await Axios.get('/api/offered');
            console.log(response.data)
            setOffer(response.data);
        }
        getPosts();
    }, []);

        const handleClick = (event) => {
            console.log(event.target)
            let targeted = event.target.id
            if (event.target.id === '') {
                targeted = event.target.innerHTML
            }


            switch (targeted) {
                case "Housing":
                    search.housing ? setSearch({ ...search, housing: false }) : setSearch({ ...search, housing: true });
                    break;
                case "Clothing":
                    search.clothes ? setSearch({ ...search, clothes: false }) : setSearch({ ...search, clothes: true });
                    break;
                case "Food":
                    search.nutrients ? setSearch({ ...search, nutrients: false }) : setSearch({ ...search, nutrients: true });
                    break;
                case "Medical Supplies":
                    search.medical ? setSearch({ ...search, medical: false }) : setSearch({ ...search, medical: true });
                    break;
                case "Household Items":
                    search.supplies ? setSearch({ ...search, supplies: false }) : setSearch({ ...search, supplies: true });
                    break;
                case "Counseling":
                    search.counseling ? setSearch({ ...search, counseling: false }) : setSearch({ ...search, counseling: true });
                    break;
                case "Dogs":
                    search.dogs ? setSearch({ ...search, dogs: false }) : setSearch({ ...search, dogs: true });
                    break;
                case "Cats":
                    search.cats ? setSearch({ ...search, cats: false }) : setSearch({ ...search, cats: true });
                    break;

                default:
            }

        }

        return (
            <div>

                <Chip
                    label="Housing"
                    id='Housing'
                    icon={<HouseIcon id='Housing' />}
                    clickable
                    color="primary"
                    onClick={handleClick}
                    variant={search.housing ? 'default' : 'outlined'}
                />

                &nbsp;
      
          <Chip
                    label="Food"
                    id="Food"
                    icon={<KitchenIcon id='Food' />}
                    clickable
                    color="primary"
                    onClick={handleClick}
                    variant={search.nutrients ? 'default' : 'outlined'}
                />

                &nbsp;
      
          <Chip
                    icon={<AccessibilityIcon id='Clothing' />}
                    label="Clothing"
                    id="Clothing"
                    clickable
                    color="primary"
                    onClick={handleClick}
                    variant={search.clothes ? 'default' : 'outlined'}
                />

                &nbsp;
      
          <Chip
                    icon={<LocalPharmacyIcon id='Medical Supplies' />}
                    label="Medical Supplies"
                    id='medical'
                    clickable
                    color="primary"
                    onClick={handleClick}
                    variant={search.medical ? 'default' : 'outlined'}
                />

                &nbsp;
      
          <Chip
                    icon={<BuildIcon id='Household Items' />}
                    label="Household Items"
                    id='Household Items'
                    clickable
                    color="primary"
                    onClick={handleClick}
                    variant={search.supplies ? 'default' : 'outlined'}
                />

                &nbsp;
      
          <Chip
                    icon={<RecordVoiceOverIcon id='Counseling' />}
                    label="Counseling"
                    id='Counseling'
                    clickable
                    color="primary"
                    onClick={handleClick}
                    variant={search.counseling ? 'default' : 'outlined'}
                />

                &nbsp;
          <br></br>
                <br></br>
                {search.housing ?
                <span>
                    <Chip
                        icon={<PetsIcon id='Dogs' />}
                        label="Dogs"
                        id='Dogs'
                        clickable
                        color="primary"
                        onClick={handleClick}
                        variant={search.dogs ? 'default' : 'outlined'}
                    />
                    &nbsp;
                    <Chip
                    icon={<PetsIcon id='Cats' />}
                    label="Cats"
                    id='cats'
                    clickable
                    color="primary"
                    onClick={handleClick}
                    variant={search.cats ? 'default' : 'outlined'}
                />
                </span>

                    :
                    ''



                }




                <hr />
                {offer.map((item, key) =>

                    <Dummy
                        key={item.name} title={item.name} text={item.text} img={item.img} location={item.location}
                        house={item.house} food={item.food} clothing={item.clothing} med={item.med} items={item.items}
                        couns={item.couns} contact={item.contact} roomSize={item.roomSize} stayLength={item.stayLength}
                        dog={item.dog} cat={item.cat}
                        housing={search.housing} nutrients={search.nutrients} clothes={search.clothes} supplies={search.supplies}
                        medical={search.medical} counseling={search.counseling} dogs={search.dogs} cats={search.cats}
                    />
                )}


           </div>
        );
    }
    
export default Offered;