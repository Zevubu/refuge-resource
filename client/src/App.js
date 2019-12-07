
import React from 'react';
import './App.css';
import Nav from './components/Nav'
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OfferedForm from "./pages/forms/offeredForm"
import Offered from "./offered.js";
import Needed from "./needed.js";
import NeededForm from './pages/forms/neededForm';
import home from './pages/home';

function App() {


        return (
            <div className="App">


                <Router>
                    <div>
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