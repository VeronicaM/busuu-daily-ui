import React from 'react';
import './signup-card.scss';
const SignupCard = (props) => {
return (
    <aside>
      <header> I am learning 
        <div>French</div>
      </header>
      <div className="signup__form">
        <label htmlFor="name">
          <input type="text" /> Name </label>
        <label htmlFor="email">
          <input type="email"/> Email </label>
        <label htmlFor="name">
          <input type="password" /> Password </label>
        <button>Submit</button>
      </div>
    </aside>
  );
};

export default SignupCard;