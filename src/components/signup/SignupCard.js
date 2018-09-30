import React from 'react';
import './signup-card.scss';
import Cat from '../icons/Cat.js';
import Saturn from '../icons/Saturn.js';

export default class SignupCard extends React.Component  {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="card__wrap">
        <div className="card__logo-container">
          <Saturn className="card__logo-saturn" />
          <div className="card__logo-text"> 
            <Cat className="card__logo-cat"/>
            <span> Saturnian </span>
          </div> 
        </div>
        <div className="signup__form">
          <label htmlFor="name"> 
            <div> Username </div>
            <input type="text" id="name" />  
          </label>
          <label htmlFor="password"> 
            <div> Password </div>
            <input type="password" id="password" />  
          </label>
           <div className="signup__form-buttons"> 
              <button>Sign In</button>
              <button>Sign Up</button>
           </div>
        </div>
      </div>
    );  
  }
};
