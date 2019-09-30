package com.core.dto;

import com.core.model.Tag;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public class JobSimpleDTO {

    private Long id;
    private String title;
    private String description;
    private String jobRole;
    private String requirement;
    private String benefit;
    private LocalDate beginDate;
    private LocalDate endDate;
    private Long salaryValue;
    private List<Tag> tags;

    public JobSimpleDTO(Long id, String title, String description, String jobRole,
                        String requirement, String benefit, LocalDate beginDate, LocalDate endDate,
                        Long salaryValue, List<Tag> tags) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.jobRole = jobRole;
        this.requirement = requirement;
        this.benefit = benefit;
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.salaryValue = salaryValue;
        this.tags = tags;
    }

    public JobSimpleDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getJobRole() {
        return jobRole;
    }

    public void setJobRole(String jobRole) {
        this.jobRole = jobRole;
    }

    public String getRequirement() {
        return requirement;
    }

    public void setRequirement(String requirement) {
        this.requirement = requirement;
    }

    public String getBenefit() {
        return benefit;
    }

    public void setBenefit(String benefit) {
        this.benefit = benefit;
    }

    public LocalDate getBeginDate() {
        return beginDate;
    }

    public void setBeginDate(LocalDate beginDate) {
        this.beginDate = beginDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Long getSalaryValue() {
        return salaryValue;
    }

    public void setSalaryValue(Long salaryValue) {
        this.salaryValue = salaryValue;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }
}
