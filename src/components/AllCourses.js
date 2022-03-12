import React, { useState } from "react";
import Course from "./Course";

function AllCourses() {
  const [courses, setCourses] = useState([
    {
      title: "Course Title 1",
      description: "Course Description 1",
    },
    {
      title: "Course Title 2",
      description: "Course Description 2",
    },
    {
      title: "Course Title 3",
      description: "Course Description 3",
    },
  ]);

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of courses are as follows:</p>
      {courses.length > 0
        ? courses.map((item) => <Course course={item} />)
        : "No course found"}
    </div>
  );
}

export default AllCourses;
