package com.practice.course_system.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "course")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_course;

    @Column(nullable = false)
    private String name_course;

    @Column
    private String description_course;

    @Column(nullable = false)
    private Integer capacity_course;

    @Column(nullable = false)
    private Integer status_course;

}
