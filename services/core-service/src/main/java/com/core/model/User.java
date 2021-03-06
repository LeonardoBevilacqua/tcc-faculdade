package com.core.model;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cpf;
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profile_id", referencedColumnName = "id")
    private Profile profile;
    
    @Column(name = "profile_id", insertable = false, updatable = false)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long profileId;

    @ManyToMany(mappedBy = "users")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Job> jobs;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "ROLES")
    @Enumerated(EnumType.STRING)
    private Set<Role> roles = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "headhunter_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Set<Job> jobsHeadhunter;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id",referencedColumnName = "ID")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<ToDo> toDos;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    @JsonIgnore
    private List<Score> scores;

    @OneToOne()
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Company company;
    
    @Column(name = "company_id", insertable = false, updatable = false)
    private Long companyId;

    public Set<Job> getJobsHeadhunter() {
        return jobsHeadhunter;
    }

    public void setJobsHeadhunter(Set<Job> jobsHeadhunter) {
        this.jobsHeadhunter = jobsHeadhunter;
    }

    public List<Score> getScores() {
        return scores;
    }

    public void setScores(List<Score> scores) {
        this.scores = scores;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public List<ToDo> getToDos() {
        return toDos;
    }

    public void setToDos(List<ToDo> toDos) {
        this.toDos = toDos;
    }

    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }

    public List<Job> getJobs() {
        return jobs;
    }

    public void setJobs(List<Job> jobs) {
        this.jobs = jobs;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

    public Long getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}	

    public void addRole(Role role) {
        roles.add(role);
    }

	@Override
	public String toString() {
		return "User [id=" + id + ", cpf=" + cpf + ", email=" + email + ", password=" + password + ", profile="
				+ profile + ", profileId=" + profileId + ", jobs=" + jobs + ", roles=" + roles + ", jobsHeadhunter="
				+ jobsHeadhunter + ", toDos=" + toDos + ", scores=" + scores + ", company=" + company + ", companyId="
				+ companyId + "]";
	}
}
