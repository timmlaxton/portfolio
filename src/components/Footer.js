import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer classname="bg-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col className="copyright">Copyright &copy; TimLaxton 2021</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
