package com.practice.course_system.service;

import com.practice.course_system.dto.UserDTO.UserRequestDTO;
import com.practice.course_system.dto.UserDTO.UserResponseDTO;
import com.practice.course_system.entity.User;
import com.practice.course_system.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public ResponseEntity<List<UserResponseDTO>> findAll(){
        List<UserResponseDTO> userResponseList =  userRepository.findAll().stream()
                .map(this::convertToDTO)
                .toList();
        return ResponseEntity.status(HttpStatus.OK).body(userResponseList);
    }

    public ResponseEntity<UserResponseDTO> findById(Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.status(HttpStatus.OK).body(convertToDTO(user));
    }

    public ResponseEntity<UserResponseDTO> save(UserRequestDTO userRequestDTO){
        User user = convertToEntity(userRequestDTO);
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(convertToDTO(user));
    }

    public ResponseEntity<UserResponseDTO> update(Long id, UserRequestDTO userRequestDTO){
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setName_user(userRequestDTO.getName_user());
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.FOUND).body(convertToDTO(user));
    }

    public Boolean delete(Long id){
        userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        userRepository.deleteById(id);
        return true;
    }







    private UserResponseDTO convertToDTO(User user){
        UserResponseDTO userResponseDTO = new UserResponseDTO();
        userResponseDTO.setId_user(user.getId_user());
        userResponseDTO.setName_user(user.getName_user());
        return userResponseDTO;
    }

    private User convertToEntity(UserRequestDTO userRequestDTO){
        User user = new User();
        user.setName_user(userRequestDTO.getName_user());
        return user;
    }

}
