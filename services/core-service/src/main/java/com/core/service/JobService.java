package com.core.service;

import com.core.dto.JobSimpleDTO;
import com.core.exception.EntityNotFoundException;
import com.core.model.Job;
import com.core.model.User;
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

    @Autowired
    private UserService userService;

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

    public Page<JobSimpleDTO> getJobsPageable(Integer page, Integer linesPerPage, String orderBy,
                                     String direction, String description, String title) {
        PageRequest pageRequest = PageRequest.of(page, linesPerPage,
                Sort.Direction.valueOf(direction), orderBy);
        return jobRepository.findDistinctByTitleIgnoreCaseContainingAndDescriptionContainingIgnoreCase(
                title, description, pageRequest).
                map(this::convertJobToSimpleJob);
    }

    public JobSimpleDTO convertJobToSimpleJob(final Job job) {
        return new JobSimpleDTO(
                job.getId(),
                job.getTitle(),
                job.getDescription(),
                job.getJobRole(),
                job.getRequirement(),
                job.getBenefit(),
                job.getBeginDate(),
                job.getEndDate(),
                job.getSalaryValue(),
                job.getTags());
    }

    public Job registerToJob(Long jobId, Long userId) {
        User userFound = userService.getUser(userId);
        Job jobFound = getJob(jobId);
        userFound.getJobs().add(jobFound);
        jobFound.getUsers().add(userFound);
        userService.updateUser(userId, userFound);
        updateJob(jobId, jobFound);
        return jobFound;
    }

    public JobSimpleDTO getSimpleJob(Long id) {
        Job job = getJob(id);
        return convertJobToSimpleJob(job);
    }

    public Job unregisterToJob(Long jobId, Long userId) {
        User userFound = userService.getUser(userId);
        Job jobFound = getJob(jobId);
        userFound.getJobs().remove(jobFound);
        jobFound.getUsers().remove(userFound);
        userService.updateUser(userId, userFound);
        updateJob(jobId, jobFound);
        return jobFound;
    }
}
