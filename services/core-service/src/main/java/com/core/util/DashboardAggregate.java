package com.core.util;

import com.core.dto.FormDTO;
import com.core.model.Form;
import com.core.model.Job;
import com.core.model.UserForm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public class DashboardAggregate {

    public static HashMap<String, Long> aggegateByProcessTotal(List<Job> jobs) {
        HashMap<String, Long> response = new HashMap<>();
        Integer processTotal = 0;
        Integer awaitingHeadhunter = 0;
        Integer finished = 0;
        for (Job job : jobs) {
            if (job.getStatus().equals("ativo")) {
                response.put("processTotal", response.get("processTotal") == null ? 1 :
                        response.get("processTotal") + 1);
            } else if (job.getStatus().equals("finalizado")) {
                response.put("totalFinished", response.get("totalFinished") == null ? 1 :
                        response.get("totalFinished") + 1);
            } else {
                response.put("awaitingHeadhunter", response.get("awaitingHeadhunter") == null ? 1 :
                        response.get("awaitingHeadhunter") + 1);
            }
        }
        return response;
    }

    public static List<FormDTO> aggregateByFormNotAnswered(List<Job> jobs, Long userId, List<UserForm> userForms) {
        List<FormDTO> forms = new ArrayList<>();
        Boolean found = false;
        for(Job job: jobs) {
            if (job.getStatus().equals("ativo")) {
                Optional<Form> formOpt = Optional.ofNullable(job.getForm());
                if (formOpt.isPresent()) {
                    for (UserForm userForm : userForms) {
                        if (userForm.getForm().getId().equals(job.getForm().getId())) {
                            found = true;
                        }
                    }
                    if (!found) {
                        FormDTO formDTO = new FormDTO();
                        formDTO.setDescription(job.getForm().getDescription());
                        formDTO.setName(job.getForm().getName());
                        formDTO.setJobId(job.getId());
                        formDTO.setId(job.getForm().getId());
                        formDTO.setFinalDate(job.getEndDate());
                        forms.add(formDTO);
                    }
                }
            }
            found = false;
        }
        return forms;
    }

    public static List<FormDTO> aggregateByFormAnswered(List<Job> jobs, Long userId, List<UserForm> userForms) {
        List<FormDTO> forms = new ArrayList<>();
        Boolean found = false;
        for(Job job: jobs) {
            if (job.getStatus().equals("ativo")) {
                Optional<Form> formOpt = Optional.ofNullable(job.getForm());
                if (formOpt.isPresent()) {
                    for (UserForm userForm : userForms) {
                        if (userForm.getForm().getId().equals(job.getForm().getId())) {
                            found = true;
                        }
                    }
                    if (found) {
                        FormDTO formDTO = new FormDTO();
                        formDTO.setDescription(job.getForm().getDescription());
                        formDTO.setName(job.getForm().getName());
                        formDTO.setJobId(job.getId());
                        formDTO.setId(job.getForm().getId());
                        formDTO.setFinalDate(job.getEndDate());
                        forms.add(formDTO);
                    }
                }
            }
            found = false;
        }
        return forms;
    }
}
