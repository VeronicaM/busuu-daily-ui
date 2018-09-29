import React, { Component } from 'react';
import NavBar from './components/navbar/navbar.js';
import SignupCard from './components/signup/signup-card.js';

import './App.scss';

class App extends Component {
    render() {
        return ( <div className="main" >
            <NavBar />
            <div className="main__wrap">
            	<SignupCard />
            </div>
            </div>
        );
    }
}

export default App;