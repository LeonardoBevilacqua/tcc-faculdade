package com.core.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.HashMap;

@Entity
public class UserForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "form_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Form form;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private HashMap<Long, String> answers;
    private HashMap<Long, Long> grades;
    private Long finalGrade;

    public UserForm() {
    }

    public UserForm(Form form, User user, HashMap<Long, String> answers, HashMap<Long, Long> grades, Long finalGrade) {
        this.form = form;
        this.user = user;
        this.answers = answers;
        this.grades = grades;
        this.finalGrade = finalGrade;
    }

    public Long getFinalGrade() {
        return finalGrade;
    }

    public void setFinalGrade(Long finalGrade) {
        this.finalGrade = finalGrade;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Form getForm() {
        return form;
    }

    public void setForm(Form form) {
        this.form = form;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public HashMap<Long, Long> getGrades() {
        return grades;
    }

    public void setGrades(HashMap<Long, Long> grades) {
        this.grades = grades;
    }

    public HashMap<Long, String> getAnswers() {
        return answers;
    }

    public void setAnswers(HashMap<Long, String> answers) {
        this.answers = answers;
    }
}
