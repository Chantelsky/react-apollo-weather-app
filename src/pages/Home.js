import React from 'react';

function Home() {
  return (
    <div className='home'>
      <h1>Search for Weather</h1>
      <input type='text' placeholder='City name...' />
      <button>Search</button>
    </div>
  );
}

export default Home;
