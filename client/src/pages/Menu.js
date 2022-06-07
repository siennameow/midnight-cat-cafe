import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
// import Auth from "../utils/auth";

const menuItems = require("../menu-items.json");

const Menu = () => {
  // const token = Auth.loggedIn() ? Auth.getToken() : null;

  // if (!token) {
  //   return false;
  // }

  const handleMenuImageChange = async (menuItemId) => {
    try {
      const menuItemImg = document.querySelector("#menuItemImg");

      for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].id === menuItemId) {
          menuItemImg.setAttribute("src", menuItems[i].image);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1 style={{textAlign: "center"}}>Menu</h1>
      <Container style={{}}>
        <Row>
          <Col xs={6}>
            {menuItems.map((item) => {
              return (
                <Card key={item.id} style={{marginBottom: "10px"}}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      ${item.price}
                    </Card.Subtitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <Button
                    variant="primary"
                    onClick={() => handleMenuImageChange(item.id)}
                  >
                    View
                  </Button>
                </Card>
              );
            })}
          </Col>
          <Col xs={6} style={{position: "fixed", right: "0px"}}>
            <Card>
              <Card.Img id="menuItemImg"/>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Menu;
