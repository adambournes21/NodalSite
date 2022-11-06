import logo from '../logo.svg';
import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function About(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p style = {{paddingTop: 100, color: 'rgb(121, 102, 255)', fontSize: 45}}>Who We Are:</p>
        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 50, width: '100%'}}>
          <div style = {{flex: 3}} />
          <Card border="primary" style={{ width: '18rem', flex: 5 }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <div style = {{flex: 1}} />
          <Card border="primary" style={{ width: '18rem', flex: 5 }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <div style = {{flex: 1}} />
          <Card border="primary" style={{ width: '18rem', flex: 5 }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <div style = {{flex: 3}} />
        </div>
      </header>
    </div>
  );
}

export default About;
