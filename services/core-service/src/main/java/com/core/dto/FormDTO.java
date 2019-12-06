package com.core.dto;

import java.time.LocalDate;

public class FormDTO {

    private Long Id;
    private String name;
    private String description;
    private Long jobId;
    private LocalDate finalDate;

    public FormDTO() {
    }

    public FormDTO(Long id, String name, String description, Long jobId) {
        Id = id;
        this.name = name;
        this.description = description;
        this.jobId = jobId;
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

    public LocalDate getFinalDate() {
        return finalDate;
    }

    public void setFinalDate(LocalDate finalDate) {
        this.finalDate = finalDate;
    }
}
