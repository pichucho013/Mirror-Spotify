import React from 'react';
import '.././App.css';
const CLIENT_ID = "";
const REDIRECT_URI = "http://localhost:3000/about"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


const Home = () => {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Home
        </p>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login</a>
      </header>
    </div>
  );
}

export default Home;
