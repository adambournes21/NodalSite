import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function navbar(props) {

  //const loggedIn = false;

  const onTouch = () => {
    props.setUser({...props.user, loggedIn: true})
    // props.user.setLoggedIn(true);
    props.signIn();
  };

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="../home">Home</Navbar.Brand>
        <Navbar.Brand href="../about">About</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
		{props.user.isLoggedIn === false
			? 	<Navbar.Text>
            <button type="submit" onClick={() => {onTouch()}}>Log In</button>
          </Navbar.Text>
			: 	<Navbar.Text>
            		Signed in as: <a href="../profile">{props.user.name}</a>
          </Navbar.Text>
      	}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;