package com.clara.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_user;

    @Column(nullable = false)
    private String name_user;

    @Column(nullable = false)
    private String email_user;

    @Column(nullable = false)
    private String password_user;
}
