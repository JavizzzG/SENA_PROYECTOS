package com.practice.course_system.service;

import com.practice.course_system.dto.Course_UserDTO.CoUsRequestDTO;
import com.practice.course_system.dto.Course_UserDTO.CoUsResponseDTO;
import com.practice.course_system.entity.Course_User;
import com.practice.course_system.repository.CoUsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CoUsService {

    private final CoUsRepository coUsRepository;

    public ResponseEntity<List<CoUsResponseDTO>> findAll(){
        List<CoUsResponseDTO> coUsResponseList =  coUsRepository.findAll().stream()
                .map(this::convertToDTO)
                .toList();
        return ResponseEntity.status(HttpStatus.OK).body(coUsResponseList);
    }

    public ResponseEntity<CoUsResponseDTO> findById(Long id){
        Course_User course_user = coUsRepository.findById(id).orElseThrow(() -> new RuntimeException("Course_User not found"));
        return ResponseEntity.status(HttpStatus.OK).body(convertToDTO(course_user));
    }

    public ResponseEntity<CoUsResponseDTO> save(CoUsRequestDTO coUsRequestDTO){
        Course_User course_user = convertToEntity(coUsRequestDTO);
        coUsRepository.save(course_user);
        return ResponseEntity.status(HttpStatus.CREATED).body(convertToDTO(course_user));
    }

    public ResponseEntity<CoUsResponseDTO> update(Long id, CoUsRequestDTO coUsRequestDTO){
        Course_User course_user = coUsRepository.findById(id).orElseThrow(() -> new RuntimeException("Course_User not found"));
        course_user.setFKid_course(coUsRequestDTO.getFKid_course());
        course_user.setFKid_user(coUsRequestDTO.getFKid_user());
        coUsRepository.save(course_user);
        return ResponseEntity.status(HttpStatus.FOUND).body(convertToDTO(course_user));
    }

    public Boolean delete(Long id){
        coUsRepository.findById(id).orElseThrow(() -> new RuntimeException("Course_User not found"));
        coUsRepository.deleteById(id);
        return true;
    }




    private CoUsResponseDTO convertToDTO(Course_User course_user){
        CoUsResponseDTO coUsResponseDTO = new CoUsResponseDTO();
        coUsResponseDTO.setId_course_user(course_user.getId_co_user());
        coUsResponseDTO.setFKid_course(course_user.getFKid_course());
        coUsResponseDTO.setFKid_user(course_user.getFKid_user());
        return coUsResponseDTO;
    }

    private Course_User convertToEntity(CoUsRequestDTO coUsRequestDTO){
        Course_User course_user = new Course_User();
        course_user.setFKid_course(coUsRequestDTO.getFKid_course());
        course_user.setFKid_user(coUsRequestDTO.getFKid_user());
        return course_user;
    }


}
