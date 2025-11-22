package com.practice.course_system.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "course_user")
public class Course_User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_co_user;

    @Column(nullable = false)
    private Long FKid_course;

    @Column(nullable = false)
    private Long FKid_user;

}
