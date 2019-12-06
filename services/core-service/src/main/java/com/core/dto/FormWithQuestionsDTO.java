package com.core.dto;

import java.time.LocalDate;
import java.util.HashMap;

public class FormWithQuestionsDTO {

    private Long Id;
    private String name;
    private String description;
    private Long jobId;
    private HashMap<Long, String> questions;

    public FormWithQuestionsDTO() {
    }

    public FormWithQuestionsDTO(Long id, String name, String description, Long jobId, HashMap<Long, String> questions) {
        Id = id;
        this.name = name;
        this.description = description;
        this.jobId = jobId;
        this.questions = questions;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
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

    public Long getJobId() {
        return jobId;
    }

    public void setJobId(Long jobId) {
        this.jobId = jobId;
    }

    public HashMap<Long, String> getQuestions() {
        return questions;
    }

    public void setQuestions(HashMap<Long, String> questions) {
        this.questions = questions;
    }
}
