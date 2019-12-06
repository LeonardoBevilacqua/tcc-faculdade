package com.core.respository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.core.model.Job;

public interface JobRepository extends JpaRepository<Job, Long> {

    Page<Job> findDistinctByTitleIgnoreCaseContainingAndDescriptionIgnoreCaseContainingAndCityIgnoreCaseContaining(
            String title, String description, String city, Pageable pageable);

    List<Job> findByCompanyId(Long companyId);

    List<Job> findByUsersId(Long userId);

    List<Job> findByHeadhunterId(Long headhunterId);

	List<Job> findJobsByCompanyId(Long companyId);
	
	List<Job> findJobsByHeadhunterId(Long headhunterId);
	
	@Query(value = "SELECT j.* FROM jobs j WHERE j.id IN (SELECT ju.job_id FROM jobs_users ju WHERE ju.user_id = :userId)", nativeQuery = true)
	List<Job> findJobsByUserId(Long userId);

	@Query("FROM Job j " + "WHERE LOWER(j.title) like %:jobTitle% " + "AND LOWER(j.city) like %:jobCity% " +
            "AND LOWER(j.description) like %:jobDescription% " + "AND LOWER(j.jobRole) like %:jobRole% ")
    Page<Job> getJobsWithFilters(@Param("jobTitle") String jobTitle, @Param("jobCity") String jobCity,
                                 @Param("jobDescription") String jobDescription, @Param("jobRole") String jobRole,
                                 Pageable pageable);
}
