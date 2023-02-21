package me.designdevelop.authservice.controller;

import me.designdevelop.authservice.entity.ERole;
import me.designdevelop.authservice.entity.Role;
import me.designdevelop.authservice.entity.User;
import me.designdevelop.authservice.payload.SignupRequest;
import me.designdevelop.authservice.repository.RoleRepository;
import me.designdevelop.authservice.repository.UserRepository;
import me.designdevelop.authservice.security.JwtUtils;
import me.designdevelop.authservice.util.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signupRequest) {
        if (userRepository.existsByUsername(signupRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (signupRequest.getEmail() == null && signupRequest.getPhoneNumber() == null) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email or phone number is required!"));
        }

        String email = "";
        String phoneNumber = "";
        try {
            email = signupRequest.getEmail();
            phoneNumber = signupRequest.getPhoneNumber();
        }catch (NullPointerException ignored){

        }

        User user = new User(signupRequest.getUsername(),passwordEncoder.encode(signupRequest.getPassword()),
                email, phoneNumber, signupRequest.getFirstName(), signupRequest.getLastName());

        if (signupRequest.getRole() == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            user.setRoles(Collections.singleton(userRole));
        } else {
            if ("admin".equals(signupRequest.getRole())) {
                Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                user.setRoles(Collections.singleton(adminRole));
            } else {
                Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                user.setRoles(Collections.singleton(userRole));
            }
        }

        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }


}
