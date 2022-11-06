import logo from '../logo.svg';
import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile(props) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick = {console.log(props.user.isLoggedIn)}>Text Button</Button>
        <p>
          This the {/* {props.user.getName()} */}'s profile
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Profile;
