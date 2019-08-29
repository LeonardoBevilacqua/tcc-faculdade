package com.core.controller;

import com.core.model.Company;
import com.core.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping
    public ResponseEntity<?> getJobs() {
        return ResponseEntity.ok(companyService.getCompanies());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getJob(@PathVariable Long id){
        return ResponseEntity.ok(companyService.getCompany(id));
    }

    @PostMapping
    public ResponseEntity<?> saveJob(@RequestBody Company job){
        return ResponseEntity.ok(companyService.saveCompany(job));
    }
}
