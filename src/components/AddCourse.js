import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

function AddCourse() {
  useEffect(() => {
    document.title = "Add Course";
  }, []);

  const [courses, setCourses] = useState({});

  // form submit...
  const formSubmit = (e) => {
    console.log(courses);
    addCourseToServer(courses);
    e.preventDefault();
  };

  // add course to server
  const addCourseToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response.data);
        toast.success("Course has been added!");
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong!");
      }
    );
  };

  return (
    <div>
      <h1 className="text-center my-3">Fill Course Details...</h1>
      <Form onSubmit={formSubmit}>
        <FormGroup>
          <Label for="courseId">Course Id</Label>
          <Input
            id="courseId"
            name="courseId"
            placeholder="Enter ID here"
            type="text"
            onChange={(e) => {
              setCourses({ ...courses, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="courseTitle">Course Title</Label>
          <Input
            id="courseTitle"
            name="courseTitle"
            placeholder="Enter Title here"
            type="text"
            onChange={(e) => {
              setCourses({ ...courses, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="courseDesc">Course Description</Label>
          <Input
            id="courseDesc"
            name="courseDesc"
            placeholder="Enter Description here"
            type="textarea"
            style={{ height: 150 }}
            onChange={(e) => {
              setCourses({ ...courses, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success" style={{ marginRight: 10 }}>
            Add Course
          </Button>
          <Button type="reset" color="warning">
            Clear
          </Button>
        </Container>
      </Form>
    </div>
  );
}

export default AddCourse;
