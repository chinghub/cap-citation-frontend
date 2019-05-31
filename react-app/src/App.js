import React from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import { Link } from "react-router-dom";

import Routes from './Routes';

import './App.css';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/"><span className="script">CAP Citation</span></Link></Navbar.Brand>
        <Navbar.Toggle/>

        <Navbar.Collapse>

          <Nav className="mr-auto">
          </Nav>

          <Nav>
            <Nav.Link href="/settings"><i className="fas fa-cog"></i></Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Navbar>

      <main>
        <Routes />
      </main>

    </div>
  );
}

export default App;
