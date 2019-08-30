package com.core.service;

import com.core.exception.UserNotFoundException;
import com.core.model.Profile;
import com.core.respository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile getProfile(Long id) {
        Optional<Profile> jobOpt = profileRepository.findById(id);
        if (jobOpt.isEmpty()) {
            throw new UserNotFoundException("Company Not Found");
        }
        return jobOpt.get();
    }
}
