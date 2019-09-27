package com.core.service;

import com.core.exception.EntityNotFoundException;
import com.core.model.Job;
import com.core.respository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
            throw new EntityNotFoundException("Vaga não encontrada");
        }
        return jobOpt.get();
    }

    @Transactional
    public Job saveJob(Job job) {
        return jobRepository.save(job);
    }

    public Job updateJob(Long id, Job job) {
        Job jobFound = getJob(id);
        jobFound = job;
        return jobRepository.save(jobFound);
    }

    public Page<Job> getJobsPageable(Integer page, Integer linesPerPage, String orderBy,
                                     String direction, String description) {
        PageRequest pageRequest = PageRequest.of(page, linesPerPage,
                Sort.Direction.valueOf(direction), orderBy);
        return jobRepository.findByDescriptionContaining(description, pageRequest);
    }
}
