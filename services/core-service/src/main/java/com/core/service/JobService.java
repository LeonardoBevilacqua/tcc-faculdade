package com.core.service;

import com.core.exception.UserNotFoundException;
import com.core.model.Job;
import com.core.respository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private CompanyService companyService;

    public List<Job> getJobs() {
        return jobRepository.findAll();
    }

    public Job getJob(Long id) {
        Optional<Job> jobOpt = jobRepository.findById(id);
        if (jobOpt.isEmpty()) {
            throw new UserNotFoundException("Job Not Found");
        }
        return jobOpt.get();
    }

    @Transactional
    public Job saveJob(Job job) {
        return jobRepository.save(job);
    }
}
