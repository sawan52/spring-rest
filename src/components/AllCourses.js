import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

function AllCourses() {
  useEffect(() => {
    document.title = "All Courses";
    getAllCoursesFromServer();
  }, []);

  // function to call server...
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        toast.success("Courses has been loaded!");
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong!");
      }
    );
  };

  const [courses, setCourses] = useState({});

  const removeCourseByIdAfterUpdate = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div>
      <p>List of courses are as follows:</p>
      {courses.length > 0
        ? courses.map((item) => (
            <Course
              key={item.id}
              course={item}
              remove={removeCourseByIdAfterUpdate}
            />
          ))
        : "No course found"}
    </div>
  );
}

export default AllCourses;
