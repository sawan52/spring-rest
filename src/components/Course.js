import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";

const Course = ({ course }) => {
  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="danger">Delete</Button>&nbsp;&nbsp;&nbsp;
          <Button color="warning">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
