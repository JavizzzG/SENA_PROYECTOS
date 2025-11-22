package com.practice.course_system.repository;


import com.practice.course_system.entity.Course_User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoUsRepository extends JpaRepository<Course_User, Long> {
}
