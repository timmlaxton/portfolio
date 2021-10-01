import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

export const AboutScreen = () => {
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image className="about-image" src="images/tim2.jpg" fluid />
        </Col>
        <ListGroup.Item className="about-text">
          <p>
            Ive been interested in coding for a while but did little about it,
            until 2019 when I applied to work as an intern for a digital agency
            in Glasgow. My aim for applying for this posiiton was to get abetter
            understanding of what it was like working within a dev environment.
            Although this position was temporary, it spurned me on to leave my
            job as a researcher and enroll in a boot camp a few months later.
          </p>

          <p>
            Since completing the course I have continued to learn and develop my
            knowledge, skills and confidence as a developer. Over the last 12
            months, I decided to focus on building apps, using the MERN stack. I
            enjoyed, writing in Javascript and after a brief introduction using
            React whilst in the bootcamp. I decided to concentrate in increasing
            my understanding of using this library/framework. From there I have
            begun to use Express, Mongoose, and Bootstrap as well, as means to
            begin to build the apps and sites I would want to use.
          </p>
        </ListGroup.Item>
      </Row>
    </>
  );
};

export default AboutScreen;
