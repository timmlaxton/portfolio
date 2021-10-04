import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Project = ({ project }) => {
  return (
    <Card className="projects-list">
      <Card.Body>
        <Card.Title as="div">{project.name}</Card.Title>
        <Link to={`/project/${project._id}`}>
          <Card.Img src={project.image} variant="top" />
        </Link>
        <Link to={`/project/${project._id}`}></Link>
      </Card.Body>
    </Card>
  );
};

export default Project;
