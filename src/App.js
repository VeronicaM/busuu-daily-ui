import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar.js';

import './App.scss';
import {
	withRouter
} from 'react-router-dom';

const HEADER_HEIGHT = 200;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			setTransparent: true
		};
		this.handleScroll = this.handleScroll.bind(this);
		this.onRouteChanged = null;
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		this.onRouteChanged = this.props.history.listen((location, action) => {
			console.log("on route change");
		});
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		this.onRouteChanged();
	};

	handleScroll(event) {

		if (window.scrollY < HEADER_HEIGHT) {
			this.setState({ setTransparent: true });
		} else {
			this.setState({ setTransparent: false });
		}
	};

	render() {
		const isTransparentClass = this.state.setTransparent && 'navbar--transparent';

		return (
			<div className="main" >
				<Navbar className={isTransparentClass} />
				<div className="banner">
					<h1 className="banner__title"> Your Travelling Adventures </h1>
				</div>
				<div className="main__wrap main__wrap--with-banner">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default withRouter(App);
