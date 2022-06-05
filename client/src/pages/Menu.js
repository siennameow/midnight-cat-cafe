import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const menuItems = require('../menu-items.json');

import Auth from '../utils/auth';

const Menu = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }

  const handleMenuImageChange = async (menuItemId) => {
    try {
      const menuItemImg = document.querySelector('#menuItemImg');
      
      for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].id === menuItemId) {
          menuItemImg.setAttribute('src', menuItems[i].image);
        }
      };
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>Menu</h1>
      <Container>
        <Row>
          <Col>
            {menuItems.map((item) => {
              return (
                <Card>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.price}</Card.Subtitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <Button variant="primary" onClick={() => handleMenuImageChange(item.menuItemId)}>Select</Button>
                </Card>
              );
            })}
          </Col>
          <Col>
            <Card>
              <Card.Img id='menuItemImg'/>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Menu;