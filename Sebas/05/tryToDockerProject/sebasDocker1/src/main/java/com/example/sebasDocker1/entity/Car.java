package com.example.sebasDocker1.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="car")
@Data
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Integer year;

}
