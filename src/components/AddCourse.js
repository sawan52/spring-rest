import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

function AddCourse() {
  return (
    <div>
      <h1 className="text-center my-3">Fill Course Details...</h1>
      <Form>
        <FormGroup>
          <Label for="courseId">Course Id</Label>
          <Input
            id="courseId"
            name="courseId"
            placeholder="Enter ID here"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="courseTitle">Course Title</Label>
          <Input
            id="courseTitle"
            name="courseTitle"
            placeholder="Enter Title here"
            type="text"
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
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="button" color="success" style={{ marginRight: 10 }}>
            Add Course
          </Button>
          <Button type="button" color="warning">
            Clear
          </Button>
        </Container>
      </Form>
    </div>
  );
}

export default AddCourse;
