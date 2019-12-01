package com.core.dto;

import java.util.List;

public class FormWithAnswersAndQuestionsDTO {

    private List<FormDTO> answered;
    private List<FormDTO> notAnswered;

    public FormWithAnswersAndQuestionsDTO() {
    }

    public FormWithAnswersAndQuestionsDTO(List<FormDTO> answered, List<FormDTO> notAnswered) {
        this.answered = answered;
        this.notAnswered = notAnswered;
    }

    public List<FormDTO> getNotAnswered() {
        return notAnswered;
    }

    public void setNotAnswered(List<FormDTO> notAnswered) {
        this.notAnswered = notAnswered;
    }

    public List<FormDTO> getAnswered() {
        return answered;
    }

    public void setAnswered(List<FormDTO> answered) {
        this.answered = answered;
    }
}
