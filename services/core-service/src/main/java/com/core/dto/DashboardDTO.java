package com.core.dto;

import com.core.model.Profile;
import com.core.model.Score;
import com.core.model.User;

import java.util.HashMap;
import java.util.List;

public class DashboardDTO {

    private HashMap<String, Long> cities;
    private List<Score> usersScore;
    private List<Profile> jobUsers;
    private Profile headhunter;

    public Profile getHeadhunter() {
        return headhunter;
    }

    public void setHeadhunter(Profile headhunter) {
        this.headhunter = headhunter;
    }

    public List<Profile> getJobUsers() {
        return jobUsers;
    }

    public void setJobUsers(List<Profile> jobUsers) {
        this.jobUsers = jobUsers;
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
