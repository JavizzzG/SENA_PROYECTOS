package com.practice.course_system.dto.Course_UserDTO;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CoUsRequestDTO {

    @NotNull
    private Long FKid_course;

    @NotNull
    private Long FKid_user;
}
