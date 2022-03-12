import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Course = ({ course, remove }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        console.log(response.data);
        toast.success("Course has been deleted!");
        remove(id);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong!");
      }
    );
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle style={{ fontWeight: "bold" }}>
          {course.title}
        </CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button color="warning">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
