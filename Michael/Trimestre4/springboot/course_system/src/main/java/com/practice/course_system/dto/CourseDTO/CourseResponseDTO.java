package com.practice.course_system.dto.CourseDTO;

import lombok.Data;

@Data
public class CourseResponseDTO {

    private Long id_course;
    private String name_course;
    private String description_course;
    private Integer capacity_course;
    private Integer status_course;

}
