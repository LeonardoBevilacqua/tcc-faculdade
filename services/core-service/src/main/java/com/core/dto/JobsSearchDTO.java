package com.core.dto;

import com.core.model.Job;
import org.springframework.data.domain.Page;

import java.util.HashMap;

public class JobsSearchDTO {

    private Page<Job> jobs;
    private HashMap<String, Long> cities;

    public Page<Job> getJobs() {
        return jobs;
    }

    public void setJobs(Page<Job> jobs) {
        this.jobs = jobs;
    }

    public HashMap<String, Long> getCities() {
        return cities;
    }

    public void setCities(HashMap<String, Long> cities) {
        this.cities = cities;
    }
}
