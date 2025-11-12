package com.clara.service;

import com.clara.dto.UserRequestDTO;
import com.clara.dto.UserResponseDTO;
import com.clara.entity.User;
import com.clara.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public UserResponseDTO save(UserRequestDTO userRequestDTO){
        User user = new User();
        UserResponseDTO userDTO= new UserResponseDTO();
        user.setName_user(userRequestDTO.getName_user());
        user.setEmail_user(userRequestDTO.getEmail_user());
        user.setPassword_user(userRequestDTO.getPassword_user());

        User userSaved = userRepository.save(user);

        userDTO.setId_user(userSaved.getId_user());
        userDTO.setName_user(userSaved.getName_user());
        userDTO.setEmail_user(userSaved.getEmail_user());
        userDTO.setPassword_user(userSaved.getPassword_user());

        return userDTO;

    }

    @Transactional
    public List<UserResponseDTO> findAll(){
        return userRepository.findAll().stream().map(user -> {
            UserResponseDTO userResponseDTO = new UserResponseDTO();
            userResponseDTO.setId_user(user.getId_user());
            userResponseDTO.setName_user(user.getName_user());
            userResponseDTO.setEmail_user(user.getEmail_user());
            userResponseDTO.setPassword_user(user.getPassword_user());
            return userResponseDTO;
        }).toList();
    }

    @Transactional
    public UserResponseDTO findById(Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User was not found"));
        UserResponseDTO userResponseDTO = new UserResponseDTO();
        userResponseDTO.setId_user(user.getId_user());
        userResponseDTO.setName_user(user.getName_user());
        userResponseDTO.setEmail_user(user.getEmail_user());
        userResponseDTO.setPassword_user(user.getPassword_user());
        return userResponseDTO;
    }

    @Transactional
    public void deleteById(Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User was not found"));

        userRepository.deleteById(id);
    }

}
