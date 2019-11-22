package com.core.util;

import com.core.model.Job;
import com.core.model.User;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

@Component
public class CityAggregate {

    public HashMap<String, Long> countUserCities(List<User> users) {
        HashMap<String, Long> cities = new HashMap<>();
        for (User user : users) {
            if (user.getProfile() != null) {
                if (user.getProfile().getAddress() != null) {
                    String city = user.getProfile().getAddress().getCity();
                    cities.put(city, cities.get(city) == null ? 1 : cities.get(city) + 1);
                }
            }
        }
        return cities;
    }

    public HashMap<String, Long> countJobCities(List<Job> jobs) {
        HashMap<String, Long> cities = new HashMap<>();
        for (Job job : jobs) {
            if (job.getCity() != null) {
                String city = job.getCity();
                cities.put(city, cities.get(city) == null ? 1 : cities.get(city) + 1);
            }
        }
        return cities;
    }

    public HashMap<String, Long> countJobRoles(List<Job> jobs) {
        HashMap<String, Long> roles = new HashMap<>();
        for (Job job : jobs) {
            if (job.getCity() != null) {
                String jobRole = job.getJobRole();
                roles.put(jobRole, roles.get(jobRole) == null ? 1 : roles.get(jobRole) + 1);
            }
        }
        return roles;
    }
}
