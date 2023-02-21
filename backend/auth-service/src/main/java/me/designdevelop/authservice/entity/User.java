package me.designdevelop.authservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;

    private String password;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

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

    public User(String username, String password, String email, String phoneNumber, String firstname, String surname) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.firstname = firstname;
        this.surname = surname;
    }
}
