package com.core.dto;

import com.core.model.Role;

import java.util.Set;

public class UserLoginDTO {

    private Long id;
    private String cpf;
    private String email;
    private Long profileId;
    private Long companyId;
    private Set<Role> roles;

    public UserLoginDTO() {
    }

    public UserLoginDTO(Long id, String cpf, String email, Long profileId, Long companyId, Set<Role> roles) {
        this.id = id;
        this.cpf = cpf;
        this.email = email;
        this.profileId = profileId;
        this.roles = roles;
        this.companyId = companyId; 
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

    public Long getProfileId() {
        return profileId;
    }

    public void setProfileId(Long profileId) {
        this.profileId = profileId;
    }       

    public Long getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}

	public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
