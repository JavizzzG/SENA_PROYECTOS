package com.practice.course_system.controller;

import com.practice.course_system.dto.CourseDTO.CourseResponseDTO;
import com.practice.course_system.dto.Course_UserDTO.CoUsRequestDTO;
import com.practice.course_system.dto.Course_UserDTO.CoUsResponseDTO;
import com.practice.course_system.dto.UserDTO.UserResponseDTO;
import com.practice.course_system.service.CoUsService;
import com.practice.course_system.service.CourseService;
import com.practice.course_system.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/course_user")
public class CoUsController {

    private final CoUsService coUsService;
    private final UserService userService;
    private final CourseService courseService;

    @GetMapping
    public ResponseEntity<List<CoUsResponseDTO>> findAll(){
        return coUsService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CoUsResponseDTO> findById(@PathVariable Long id){
        return coUsService.findById(id);
    }

    @PostMapping
    public ResponseEntity<CoUsResponseDTO> save(@RequestBody CoUsRequestDTO coUsRequestDTO){

        ResponseEntity<UserResponseDTO> userResponseDTO = userService.findById(coUsRequestDTO.getFKid_user());
        if(userResponseDTO.getBody() == null){
            throw new RuntimeException("User not found");
        }

        ResponseEntity<CourseResponseDTO> courseResponseDTO = courseService.findById(coUsRequestDTO.getFKid_course());
        if(courseResponseDTO.getBody() == null){
            throw new RuntimeException("Course not found");
        }

        return coUsService.save(coUsRequestDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CoUsResponseDTO> update(@PathVariable Long id, @RequestBody CoUsRequestDTO coUsRequestDTO){

        ResponseEntity<UserResponseDTO> userResponseDTO = userService.findById(coUsRequestDTO.getFKid_user());
        if(userResponseDTO.getBody() == null){
            throw new RuntimeException("User not found");
        }

        ResponseEntity<CourseResponseDTO> courseResponseDTO = courseService.findById(coUsRequestDTO.getFKid_course());
        if(courseResponseDTO.getBody() == null){
            throw new RuntimeException("Course not found");
        }

        return coUsService.update(id, coUsRequestDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return coUsService.delete(id) ? ResponseEntity.status(HttpStatus.OK).body("Course_User deleted successfully") : ResponseEntity.status(HttpStatus.NOT_FOUND).body("Course_User not found");
    }

}
