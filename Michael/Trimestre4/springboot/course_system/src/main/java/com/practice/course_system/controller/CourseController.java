package com.practice.course_system.controller;

import com.practice.course_system.dto.CourseDTO.CourseRequestDTO;
import com.practice.course_system.dto.CourseDTO.CourseResponseDTO;
import com.practice.course_system.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/course")
public class CourseController {

    private final CourseService courseService;


    @GetMapping
    public ResponseEntity<List<CourseResponseDTO>> findAll(){
        return courseService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseResponseDTO> findById(@PathVariable Long id){
        return courseService.findById(id);
    }

    @PostMapping
    public ResponseEntity<CourseResponseDTO> save(@RequestBody CourseRequestDTO course){
        return courseService.save(course);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseResponseDTO> update(@PathVariable Long id, @RequestBody CourseRequestDTO course){
        return courseService.update(id, course);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return courseService.delete(id) ? ResponseEntity.status(HttpStatus.OK).body("Course deleted successfully") : ResponseEntity.status(HttpStatus.NOT_FOUND).body("Course not found");
    }

}
