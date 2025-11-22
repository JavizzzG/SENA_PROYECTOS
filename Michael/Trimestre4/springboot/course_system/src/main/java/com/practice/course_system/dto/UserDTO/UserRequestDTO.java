package com.practice.course_system.dto.UserDTO;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserRequestDTO {

    @NotNull
    @Size(min=1, max=60)
    private String name_user;

}
