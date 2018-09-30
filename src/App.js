import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar.js';
import SignupCard from './components/signup/SignupCard.js';
import ActivityFeed from './components/activity-feed/ActivityFeed.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';

import './App.scss';

const HEADER_HEIGHT = 200;

class App extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	setTransparent: true
	  };
	  this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
	  window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUpdate() {
	  console.log('test update');
	};

	componentWillUnmount() {
	  window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll(event) {
		
		if(window.scrollY < HEADER_HEIGHT){
			this.setState({setTransparent: true});
		} else {
			this.setState({setTransparent: false});
		} 
	};

    render() {
    	const isTransparentClass = this.state.setTransparent && 'navbar--transparent';

    	const routes = <Switch> 
    		<Route exact={true} path="/" component={SignupCard} />
			<Route path="/activity-feed" component={ActivityFeed}/>  
			<Route path="/notifications" render={() => {
			 	return (
		          <div className="jumbotron">
		            <h1 className="display-3">Hello, world!</h1>
		          </div>
		         );
		 }} />
		 	 <Route path="*" component={SignupCard} />
		 </Switch>;

        return ( <Router>
	    		<div className="main" >
	    			<NavBar className={isTransparentClass}/>
	    			<div className="banner"> 
	    				<h1 className=""> Your Travel Adventures </h1>
	    			 </div>
		        	<div className="main__wrap main__wrap--with-baner">
		        		{routes}
		        	</div>
	         	</div>
        	</Router>
        );
    }
}

export default App;