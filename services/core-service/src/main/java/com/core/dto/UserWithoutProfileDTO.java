package com.core.dto;

import com.core.model.Role;

import java.util.HashSet;
import java.util.Set;

public class UserWithoutProfileDTO {

    private Long id;
    private String cpf;
    private String email;
    private Long profileId;
    private Set<Role> roles = new HashSet<>();

    public UserWithoutProfileDTO(Long id, String cpf, String email, Long profileId, Set<Role> roles) {
        this.id = id;
        this.cpf = cpf;
        this.email = email;
        this.profileId = profileId;
        this.roles = roles;
    }

    public UserWithoutProfileDTO() {
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Long getProfileId() {
        return profileId;
    }

    public void setProfileId(Long profileId) {
        this.profileId = profileId;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", cpf='" + cpf + '\'' +
                ", email='" + email + '\'' +
                ", roles=" + roles +
                '}';
    }
}
