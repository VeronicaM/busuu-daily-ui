import React from 'react';

const Home = (props) => {
return (
   <svg {...props} viewBox="0 0 500 500" width="512" height="512">
	  <path d="M16 256L256 64l96 72v-32h48v72l96 80h-48v192H328V288h-96v160H64V256z" stroke="#000" stroke-width="12" stroke-linejoin="round"/>
	</svg>
  );
};

export default Home;