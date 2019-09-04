package com.core.controller;

import com.core.model.Job;
import com.core.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/jobs")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping
    public ResponseEntity<?> getJobs() {
        return ResponseEntity.ok(jobService.getJobs());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getJob(@PathVariable Long id){
        return ResponseEntity.ok(jobService.getJob(id));
    }

    @PreAuthorize(
            "hasRole('ROLE_ADMIN') or " +
            "hasRole('ROLE_RECRUTER') or " +
            "hasRole('ROLE_RECRUTER_ADMIN')"
    )
    @PostMapping
    public ResponseEntity<?> saveJob(@RequestBody Job job){
        return ResponseEntity.ok(jobService.saveJob(job));
    }

}
