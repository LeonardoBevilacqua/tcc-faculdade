package com.core.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.HashMap;
import java.util.List;

@Entity
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private HashMap<Long, String> questions;
    private HashMap<Long, String> answers;

    @ManyToMany
    @JoinTable(
            name = "forms_users",
            joinColumns = @JoinColumn(name = "form_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<UserForm> users;

    @ManyToOne
    @JoinColumn(name = "job_id", nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Job job;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public HashMap<Long, String> getQuestions() {
        return questions;
    }

    public void setQuestions(HashMap<Long, String> questions) {
        this.questions = questions;
    }

    public HashMap<Long, String> getAnswers() {
        return answers;
    }

    public void setAnswers(HashMap<Long, String> answers) {
        this.answers = answers;
    }

    public List<UserForm> getUsers() {
        return users;
    }

    public void setUsers(List<UserForm> users) {
        this.users = users;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }
}
