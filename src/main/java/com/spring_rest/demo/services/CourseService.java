package com.spring_rest.demo.services;

import com.spring_rest.demo.entities.Course;

import java.util.List;

public interface CourseService {

    public List<Course> getCourses();

    public Course getOneCourse(Long courseId);

    public Course addCourse(Course course);

    public Course updateCourse(Course course);

    public void deleteCourse(Long courseId);
}
