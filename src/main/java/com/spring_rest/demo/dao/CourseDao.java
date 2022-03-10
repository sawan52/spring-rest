package com.spring_rest.demo.dao;

import com.spring_rest.demo.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseDao extends JpaRepository<Course, Long> {
}
