package com.core.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String review;
    private Long value;

    @ManyToOne
    @JoinColumn(name = "job_id", unique=true)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Job job;

    @ManyToOne
    @JoinColumn(name = "user_id", unique=true)
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Long getValue() {
        return value;
    }

    public void setValue(Long value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Score{" +
                "id=" + id +
                ", review='" + review + '\'' +
                ", value=" + value +
                ", job=" + job +
                ", user=" + user +
                '}';
    }
}
