
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
import Offered from "./offered.js"

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

function App() {
    //using Hooks instead of classes to set state

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

            <Offered />
                
            </div>
        );
    }
    
export default App;