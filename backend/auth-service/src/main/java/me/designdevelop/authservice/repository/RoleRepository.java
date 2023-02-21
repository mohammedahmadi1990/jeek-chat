package me.designdevelop.authservice.repository;

import me.designdevelop.authservice.entity.ERole;
import me.designdevelop.authservice.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
