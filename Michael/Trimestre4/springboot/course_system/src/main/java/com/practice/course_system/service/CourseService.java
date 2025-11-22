package com.practice.course_system.service;

import com.practice.course_system.dto.CourseDTO.CourseRequestDTO;
import com.practice.course_system.dto.CourseDTO.CourseResponseDTO;
import com.practice.course_system.entity.Course;
import com.practice.course_system.repository.CourseRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;

    @Transactional
    public ResponseEntity<List<CourseResponseDTO>> findAll(){
        List<CourseResponseDTO> courseResponseDTOList = courseRepository.findAll().stream()
                .map(this::convertToDTO)
                .toList();

        return ResponseEntity.status(HttpStatus.OK).body(courseResponseDTOList);
    }

    @Transactional
    public ResponseEntity<CourseResponseDTO> findById(Long id){
        return ResponseEntity.status(HttpStatus.OK).body(convertToDTO(courseRepository.findById(id).orElseThrow(() -> new RuntimeException("Course was not found"))));
    }

    @Transactional
    public ResponseEntity<CourseResponseDTO> save(CourseRequestDTO course) {

        Course courseEntity = convertToEntity(course);
        courseRepository.save(courseEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(convertToDTO(courseEntity));

    }

    @Transactional
    public ResponseEntity<CourseResponseDTO> update(Long id, CourseRequestDTO course){
        Course courseEntity = courseRepository.findById(id).orElseThrow(() -> new RuntimeException("Course was not found"));
        courseEntity.setName_course(course.getName_course());
        courseEntity.setDescription_course(course.getDescription_course());
        courseEntity.setCapacity_course(course.getCapacity_course());
        courseEntity.setStatus_course(course.getStatus_course());
        courseRepository.save(courseEntity);
        return ResponseEntity.status(HttpStatus.FOUND).body(convertToDTO(courseEntity));
    }

    @Transactional
    public Boolean delete(Long id){
        courseRepository.findById(id).orElseThrow(() -> new RuntimeException("Course was not found"));
        courseRepository.deleteById(id);
        return true;
    }




    private CourseResponseDTO convertToDTO(Course course){
        CourseResponseDTO courseResponse =  new CourseResponseDTO();
        courseResponse.setId_course(course.getId_course());
        courseResponse.setName_course(course.getName_course());
        courseResponse.setDescription_course(course.getDescription_course());
        courseResponse.setCapacity_course(course.getCapacity_course());
        courseResponse.setStatus_course(course.getStatus_course());
        return courseResponse;
    }

    private Course convertToEntity(CourseRequestDTO course){
        Course courseEntity = new Course();
        courseEntity.setName_course(course.getName_course());
        courseEntity.setDescription_course(course.getDescription_course());
        courseEntity.setCapacity_course(course.getCapacity_course());
        courseEntity.setStatus_course(course.getStatus_course());
        return courseEntity;
    }

}
