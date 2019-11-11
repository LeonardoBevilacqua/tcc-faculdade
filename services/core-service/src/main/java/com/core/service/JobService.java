package com.core.service;

import com.core.dto.DashboardDTO;
import com.core.dto.JobSimpleDTO;
import com.core.exception.EntityNotFoundException;
import com.core.model.Job;
import com.core.model.Profile;
import com.core.model.Score;
import com.core.model.User;
import com.core.respository.JobRepository;
import com.core.respository.ScoreRepository;
import com.core.util.CityAggregate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JobService {

	@Autowired
	private JobRepository jobRepository;

	@Autowired
	private UserService userService;

	@Autowired
	private CityAggregate aggregate;

	@Autowired
	private ScoreRepository scoreRepository;

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

	public Page<Job> getJobsPageable(Integer page, Integer linesPerPage, String orderBy, String direction,
			String description, String title) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Sort.Direction.valueOf(direction), orderBy);
		return jobRepository.findDistinctByTitleIgnoreCaseContainingAndDescriptionContainingIgnoreCase(title,
				description, pageRequest);
	}

	public JobSimpleDTO convertJobToSimpleJob(final Job job) {
		return new JobSimpleDTO(job.getId(), job.getTitle(), job.getDescription(), job.getJobRole(),
				job.getRequirement(), job.getBenefit(), job.getBeginDate(), job.getEndDate(), job.getSalaryValue(),
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

	public DashboardDTO getJobDashborad(Long id) {
		DashboardDTO dash = new DashboardDTO();
		Job job = getJob(id);
		dash.setHeadhunter(job.getHeadhunter() != null ? job.getHeadhunter().getProfile() : null);
		List<Score> scores = scoreRepository.findByJobIdOrderByValueDesc(id);
		dash.setCities(aggregate.countUserCities(job.getUsers()));
		List<Profile> userFiltered = job.getUsers().stream().map(user -> user.getProfile())
				.collect(Collectors.toList());
		dash.setJobUsers(userFiltered);
		dash.setUsersScore(scores.stream().limit(5).collect(Collectors.toList()));
		return dash;
	}

	public Job reviewUser(Long jobId, Long userId, Score score) {
		Job job = getJob(jobId);
		User user = userService.getUser(userId);
		score.setJob(job);
		score.setProfile(user.getProfile());
		job.getScores().add(score);
		user.getProfile().getScores().add(score);
		scoreRepository.save(score);
		updateJob(job.getId(), job);
		userService.updateUser(userId, user);
		return job;
	}

	public Job removeHeadhunterFromJob(Long jobId, Long headhunterId) {
		User headhunter = userService.getUser(headhunterId);
		Job job = getJob(jobId);
		headhunter.getJobs().remove(job);
		job.setHeadhunter(null);
		userService.updateUser(headhunterId, headhunter);
		return jobRepository.save(job);
	}

	public Job addHeadhunterToJob(Long jobId, Long headhunterId) {
		User headhunter = userService.getUser(headhunterId);
		Job job = getJob(jobId);
		job.setHeadhunter(headhunter);
		headhunter.getJobs().add(job);
		jobRepository.save(job);
		userService.updateUser(headhunterId, headhunter);
		return job;
	}

	public List<Job> getJobsByCompanyId(Long companyId) {
		List<Job> job = jobRepository.findJobsByCompanyId(companyId);
		
		return job;
	}
	
	public List<Job> getJobsByHeadhunterId(Long headhunterId) {
		List<Job> job = jobRepository.findJobsByHeadhunterId(headhunterId);
		
		return job;
	}
	
	public List<Job> getJobsByUserId(Long userId) {
		List<Job> job = jobRepository.findJobsByUserId(userId);
		
		return job;
	}
}
