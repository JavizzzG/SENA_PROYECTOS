package com.practice.course_system.controller;

import com.practice.course_system.dto.UserDTO.UserRequestDTO;
import com.practice.course_system.dto.UserDTO.UserResponseDTO;
import com.practice.course_system.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<List<UserResponseDTO>> findAll(){
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> findById(@PathVariable Long id){
        return userService.findById(id);
    }

    @PostMapping
    public ResponseEntity<UserResponseDTO> save(@RequestBody UserRequestDTO user){
        return userService.save(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDTO> update(@PathVariable Long id, @RequestBody UserRequestDTO user){
        return userService.update(id, user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return userService.delete(id) ? ResponseEntity.status(HttpStatus.OK).body("User deleted successfully") : ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    }
}
