import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../register/SignupForm';
import LoginForm from '../register/LoginForm';

import Auth from '../../utils/auth';

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>Midnight Cat Cafe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link as={Link} to='/menu'>Menu</Nav.Link>
              <Nav.Link as={Link} to='/shopping'>Shopping</Nav.Link>
              <Nav.Link as={Link} to='/events'>Events</Nav.Link>
              <Nav.Link>
                {Auth.loggedIn() ? (
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                ) : (
                  <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                )}
              </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
          <Tab.Container defaultActiveKey='login'>
            <Modal.Header>
              <Modal.Title>
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey='login'>Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tab.Content>
                <Tab.Pane eventKey='login'>
                  <LoginForm handleModalClose={() => setShowModal(false)}/>
                </Tab.Pane>
                <Tab.Pane eventKey='signup'>
                  <SignUpForm handleModalClose={() => setShowModal(false)}/>
                </Tab.Pane>
              </Tab.Content>
            </Modal.Body>
          </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;