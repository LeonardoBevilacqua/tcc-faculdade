package com.core.respository;

import com.core.model.Job;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {

    Page<Job> findDistinctByTitleIgnoreCaseContainingAndDescriptionContainingIgnoreCase(
            String title, String description, Pageable pageable);
}
