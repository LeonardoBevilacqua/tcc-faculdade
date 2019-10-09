package com.core.dto;

import com.core.model.Score;
import com.core.model.User;

import java.util.HashMap;
import java.util.List;

public class DashboardDTO {

    private HashMap<String, Long> cities;
    private List<Score> usersScore;
    private List<UserSimpleDTO> jobUsers;
    private User headhunter;

    public List<UserSimpleDTO> getJobUsers() {
        return jobUsers;
    }

    public void setJobUsers(List<UserSimpleDTO> jobUsers) {
        this.jobUsers = jobUsers;
    }

    public User getHeadhunter() {
        return headhunter;
    }

    public void setHeadhunter(User headhunter) {
        this.headhunter = headhunter;
    }

    public HashMap<String, Long> getCities() {
        return cities;
    }

    public void setCities(HashMap<String, Long> cities) {
        this.cities = cities;
    }

    public List<Score> getUsersScore() {
        return usersScore;
    }

    public void setUsersScore(List<Score> usersScore) {
        this.usersScore = usersScore;
    }
}
