
import React from 'react';
import './index.css';
import Nav from './components/Nav'
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import OfferedForm from "./pages/forms/offeredForm"
import Offered from "./offered.js";
import Needed from "./needed.js";
import NeededForm from './pages/forms/neededForm';
import home from './pages/home';
import logo from './components/Pictures/logo.PNG';

function App() {


        return (
            <div className="App">


                <Router>
                    <div>
                        <div className="homeLink">
                        <Link to="/"> <img src={logo} width="100%" alt="Refuge-Resource"></img></Link>
                       </div>
                        <Nav />
                        &nbsp;
                        <Switch>
                            <Route path="/needed" component={Needed} />
                            <Route path="/offered" component={Offered}/>
                            <Route exact path="/neededForm" component={NeededForm}/>
                            <Route exact path="/offeredform" component={OfferedForm}/>
                            <Route path="/" component={home}/>
                        </Switch>
                    </div>
                </Router>

                
            </div>
        );
    }
    
export default App;