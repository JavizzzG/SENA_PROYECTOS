package com.clara.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserRequestDTO {
    @Size(min = 3, max = 60)
    @NotEmpty
    private String name_user;

    @Size(min = 5, max = 40)
    @NotBlank
    private String email_user;

    @Size(min = 8, max = 25)
    @NotEmpty
    private String password_user;
}
