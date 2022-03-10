package com.spring_rest.demo.controller;

import com.spring_rest.demo.entities.Course;
import com.spring_rest.demo.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MyController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/home")
    public String home() {
        return "Welcome to HOME page!";
    }

    // get all the courses...
    @GetMapping("/courses")
    public List<Course> getCourses() {
        return courseService.getCourses();
    }

    // get one course...
    @GetMapping("/courses/{courseId}")
    public Course getCourses(@PathVariable Long courseId) {
        return courseService.getOneCourse(courseId);
    }

    // add a course...
    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    // update a course...
    @PutMapping("/courses")
    public Course updateCourse(@RequestBody Course course) {
        return courseService.updateCourse(course);
    }

    // delete a course...
    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable Long courseId) {
        try {
            courseService.deleteCourse(courseId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
