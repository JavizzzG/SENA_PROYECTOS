package com.practice.course_system.dto.Course_UserDTO;

import lombok.Data;

@Data
public class CoUsResponseDTO {

    private Long id_course_user;

    private Long FKid_course;

    private Long FKid_user;

}
