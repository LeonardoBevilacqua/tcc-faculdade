package com.core.dto;

import com.core.model.Role;

import java.util.Set;

public class UserLoginDTO {

    private Long id;
    private String cpf;
    private String email;
    private String photoUrl;
    private Long profileId;
    private Set<Role> roles;

    public UserLoginDTO() {
    }

    public UserLoginDTO(Long id, String cpf, String email,
                        String photoUrl, Long profileId, Set<Role> roles) {
        this.id = id;
        this.cpf = cpf;
        this.email = email;
        this.photoUrl = photoUrl;
        this.profileId = profileId;
        this.roles = roles;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
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

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
