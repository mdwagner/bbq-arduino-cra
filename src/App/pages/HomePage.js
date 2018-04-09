import React from 'react';

const HomePage = ({ next }) => (
  <div>
    <h1>Welcome to BBQ Arduino!</h1>
    <button onClick={next}>Enter</button>
  </div>
);

export default HomePage;
