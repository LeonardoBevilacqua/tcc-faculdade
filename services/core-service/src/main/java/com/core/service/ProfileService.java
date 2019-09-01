package com.core.service;

import com.core.exception.EntityNotFoundException;
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
            throw new EntityNotFoundException("Profile não encontrado");
        }
        return jobOpt.get();
    }
}
