package com.core.controller;

import com.core.model.Job;
import com.core.model.Score;
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
    public ResponseEntity<?> getJobs(
            @RequestParam(value = "description", defaultValue = "") String description,
            @RequestParam(value = "title", defaultValue = "") String title,
            @RequestParam(value = "orderBy", defaultValue = "title") String orderBy,
            @RequestParam(value = "direction", defaultValue = "ASC") String direction,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "20") int size) {
        return ResponseEntity.ok(jobService.getJobsPageable(
                page, size, orderBy, direction, description, title));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getJob(@PathVariable Long id){
        return ResponseEntity.ok(jobService.getJob(id));
    }
    
    @GetMapping("/company/{companyId}")
    public ResponseEntity<?> getJobsByCompany(@PathVariable Long companyId) {
    	return ResponseEntity.ok(jobService.getJobsByCompanyId(companyId));
    }
    
    @GetMapping("/headhunter/{headhunterId}")
    public ResponseEntity<?> getJobsByHeadhunter(@PathVariable Long headhunterId) {
    	return ResponseEntity.ok(jobService.getJobsByHeadhunterId(headhunterId));
    }
    
    @GetMapping("/candidate/{userId}")
    public ResponseEntity<?> getJobsByCandidate(@PathVariable Long userId) {
    	return ResponseEntity.ok(jobService.getJobsByUserId(userId));
    }

    @GetMapping("/{id}/simple")
    public ResponseEntity<?> getSimpleJob(@PathVariable Long id){
        return ResponseEntity.ok(jobService.getSimpleJob(id));
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

    @PutMapping("/{id}")
    public ResponseEntity<?> updateJob(@PathVariable Long id, @RequestBody Job job) {
        return ResponseEntity.ok(jobService.updateJob(id, job));
    }

    @PutMapping("/{jobId}/register/{userId}")
    public ResponseEntity<?> registerToJob(@PathVariable Long jobId, @PathVariable Long userId) {
        return ResponseEntity.ok(jobService.registerToJob(jobId, userId));
    }

    @PutMapping("/{jobId}/unregister/{userId}")
    public ResponseEntity<?> unregisterFromJob(@PathVariable Long jobId, @PathVariable Long userId) {
        return ResponseEntity.ok(jobService.unregisterToJob(jobId, userId));
    }

    @PutMapping("/{jobId}/headhunters/add/{headhunterId}")
    public ResponseEntity<?> addHeadhunterToJob(@PathVariable Long jobId, @PathVariable Long headhunterId) {
        return ResponseEntity.ok(jobService.addHeadhunterToJob(jobId, headhunterId));
    }

    @PutMapping("/{jobId}/headhunters/remove/{headhunterId}")
    public ResponseEntity<?> removeHeadhunterFromJob(@PathVariable Long jobId, @PathVariable Long headhunterId) {
        return ResponseEntity.ok(jobService.removeHeadhunterFromJob(jobId, headhunterId));
    }

    @GetMapping("/{id}/dashboard")
    public ResponseEntity<?> getJobDashborad(@PathVariable Long id) {
        return ResponseEntity.ok(jobService.getJobDashborad(id));
    }

    @PostMapping("/{jobId}/review/{userId}")
    public ResponseEntity<?> reviewUser(@PathVariable Long jobId,
                                        @PathVariable Long userId,
                                        @RequestBody Score score) {
        return ResponseEntity.ok(jobService.reviewUser(jobId, userId, score));
    }
}
