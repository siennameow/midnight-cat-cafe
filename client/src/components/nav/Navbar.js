import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../register/SignupForm';
import LoginForm from '../register/LoginForm';
import '../nav/navbar-styles.css';
import Auth from '../../utils/auth';
import Logo from '../../assets/images/logo.png';
const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className="light" expand="lg">
        <Container>
          <img
            alt="logo"
            src={Logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            style={{ marginRight: '2%' }}
          />{' '}
          <Navbar.Brand as={Link} to="/" className="navbrand">
            Midnight Cat Cafe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link as={Link} to="/menu" className="navbrand">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/shopping" className="navbrand">
              Merch
            </Nav.Link>
            <Nav.Link as={Link} to="/events" className="navbrand">
              Events
            </Nav.Link>
            <Nav.Link>
              {Auth.loggedIn() ? (
                <Nav.Link onClick={Auth.logout} className="navbrand">
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={() => setShowModal(true)}
                  className="navbrand"
                >
                  Login/Sign Up
                </Nav.Link>
              )}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        <Tab.Container defaultActiveKey="login">
          <Modal.Header>
            <Modal.Title>
              <Nav className="pills">
                <Nav.Item>
                  <Nav.Link className="link" eventKey="login">
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="link" eventKey="signup">
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
