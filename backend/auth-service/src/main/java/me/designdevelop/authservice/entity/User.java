package me.designdevelop.authservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;

    private String password;

    @Column(unique = true)
    private String email;

    private boolean emailConfirmed;

    @Column(unique = true)
    private String phoneNumber;

    private boolean phoneNumberConfirmed;

    private String firstname;

    private String surname;

    private Date birthdate;

    @Column(unique = true)
    private String googleId;

}
