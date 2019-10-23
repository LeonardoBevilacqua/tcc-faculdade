package com.core.respository;

import com.core.model.Job;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {

    Page<Job> findDistinctByTitleIgnoreCaseContainingAndDescriptionContainingIgnoreCase(
            String title, String description, Pageable pageable);

    List<Job> findByCompanyId(Long companyId);

    List<Job> findByUsersId(Long userId);

    List<Job> findByHeadhunterId(Long headhunterId);

	List<Job> findJobsByCompanyId(Long companyId);
	
	List<Job> findJobsByHeadhunterId(Long headhunterId);
}
