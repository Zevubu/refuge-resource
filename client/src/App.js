
import React from 'react';
import './App.css';
import Nav from './components/Nav'
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OfferedForm from "./pages/forms/offeredForm"
import Offered from "./offered.js"
import neededForm from './pages/forms/neededForm';

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