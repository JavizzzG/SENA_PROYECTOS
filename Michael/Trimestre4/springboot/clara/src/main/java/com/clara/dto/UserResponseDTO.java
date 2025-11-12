package com.clara.dto;

import lombok.Data;

@Data
public class UserResponseDTO {

    private Long id_user;

    private String name_user;

    private String email_user;

    private String password_user;
}
