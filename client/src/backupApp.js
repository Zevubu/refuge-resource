
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Dummy from './components/dummy'
import API from "./utils/API";
import Nav from './components/Nav'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NeededForm from "./pages/forms/neededForm"
import OfferedForm from "./pages/forms/offeredForm"

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import HouseIcon from '@material-ui/icons/House';
import KitchenIcon from '@material-ui/icons/Kitchen';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import BuildIcon from '@material-ui/icons/Build';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

import Axios from 'axios';
import neededForm from './pages/forms/neededForm';
var offeredPosts = [];
// = {
// 	"name":"Zev",
// 	"contact": "email@email.com",
// 	"location":"oakland",
// 	"house":true,
//     "roomSize":2,
//     "stayLength":"3 month",
//     "dog":false,
//     "cat":false,
// 	"med":false,
//     "food":false,
//     "clothing":false,
//     "items":false,
//     "couns":false,
//     "other":false,
//     "img":"https://dsmpublicartfoundation.org/wp-content/uploads/1970/01/3579-Louis-Vuitton-Crack-House-Jordan-Weber.jpg",
//     "text":"I have stuff to say!",
//     "more":"string beans and rice!"
// };


    // .then(function() {console.log(offeredPosts)});

    // console.log(offeredPosts);

ReactDOM.render(<Nav />,document.getElementById("root"));


function App() {
    //using Hooks instead of classes to set state

    

        const [off, setOff] = useState(true);
        const [search, setSearch] = useState({
            housing: true,
            medical: true,
            nutrients: true,
            clothes: true,
            supplies: true,
            counseling: true,
            other: true
        });
        console.log(offeredPosts);
        const [offer, setOffer] = useState(offeredPosts);



            Axios.get('http://localhost:3001/api/offered').then(function (res) {
        offeredPosts = res.data;
        setOffer(offeredPosts)
        })
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
                default:
            }

        }

        return (
            <div className="App">
                <Router>
                    <div>
                        <Nav />
                        <Switch>
                            <Route exact path="/neededform" component={neededForm}/>
                            <Route exact path="/offeredform" component={OfferedForm}/>
                        </Switch>
                    </div>
                </Router>


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
                    <Chip
                        icon={<RecordVoiceOverIcon id='counseling' />}
                        label="Counseling"
                        id='counseling'
                        clickable
                        color="primary"
                        onClick={handleClick}
                        variant={search.counseling ? 'default' : 'outlined'}
                    />
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
                        medical={search.medical} counseling={search.counseling}
                    />
                )}


            </div>
        );
    }
    
export default App;