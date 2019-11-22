package com.core.dto;

import java.util.HashMap;

public class AnswersDTO {

    private Long formId;
    private Long userId;
    private HashMap<Long, String> answers;
    private HashMap<Long, Long> grades;
    private Long finalGrade;
    private Long userFormID;

    public Long getFormId() {
        return formId;
    }

    public void setFormId(Long formId) {
        this.formId = formId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public HashMap<Long, String> getAnswers() {
        return answers;
    }

    public void setAnswers(HashMap<Long, String> answers) {
        this.answers = answers;
    }

    public Long getFinalGrade() {
        return finalGrade;
    }

    public void setFinalGrade(Long finalGrade) {
        this.finalGrade = finalGrade;
    }

    public Long getUserFormID() {
        return userFormID;
    }

    public void setUserFormID(Long userFormID) {
        this.userFormID = userFormID;
    }

    public HashMap<Long, Long> getGrades() {
        return grades;
    }

    public void setGrades(HashMap<Long, Long> grades) {
        this.grades = grades;
    }

    @Override
    public String toString() {
        return "AnswersDTO{" +
                "formId=" + formId +
                ", userId=" + userId +
                ", answers=" + answers +
                ", grades=" + grades +
                ", finalGrade=" + finalGrade +
                ", userFormID=" + userFormID +
                '}';
    }
}
