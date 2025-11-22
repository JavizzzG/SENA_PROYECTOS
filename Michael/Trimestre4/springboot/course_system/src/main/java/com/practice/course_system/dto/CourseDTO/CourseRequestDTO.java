package com.practice.course_system.dto.CourseDTO;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.validation.annotation.Validated;

@Data
public class CourseRequestDTO {

    @Size(min=1, max=100)
    @NotNull
    private String name_course;

    @Size(max=255)
    private String description_course;

    @Min(1)
    private Integer capacity_course;

    @Min(0)
    @Max(2)
    private Integer status_course;

}
