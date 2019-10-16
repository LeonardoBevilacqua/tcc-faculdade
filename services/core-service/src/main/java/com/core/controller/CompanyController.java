package com.core.controller;

import com.core.model.Company;
import com.core.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping
    public ResponseEntity<?> getCompanies() {
        return ResponseEntity.ok(companyService.getCompanies());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCompany(@PathVariable Long id){
        return ResponseEntity.ok(companyService.getCompany(id));
    }

    @PreAuthorize(
            "hasRole('ROLE_ADMIN') or " +
            "hasRole('ROLE_RECRUTER') or " +
            "hasRole('ROLE_RECRUTER_ADMIN')"
    )
    @PostMapping
    public ResponseEntity<?> saveCompany(@RequestBody Company company){
        return ResponseEntity.ok(companyService.saveCompany(company));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCompany(@PathVariable Long id, @RequestBody Company company) {
        return ResponseEntity.ok(companyService.updateCompany(id, company));
    }

    @PutMapping("/{id}/recruters/add/{recruterId}")
    public ResponseEntity<?> addRecruterToCompany(@PathVariable Long id, @PathVariable Long recruterId) {
        return ResponseEntity.ok(companyService.addRecruterToCompany(id, recruterId));
    }

    @PutMapping("/{id}/recruters/remove/{recruterId}")
    public ResponseEntity<?> removeRecruterToCompany(@PathVariable Long id, @PathVariable Long recruterId) {
        return ResponseEntity.ok(companyService.removeRecruterToCompany(id, recruterId));
    }

    @GetMapping("/{companyId}/dashboard/stats")
    public ResponseEntity<?> getDashboardStats(@PathVariable Long companyId) {
        return ResponseEntity.ok(companyService.getDashboradStats(companyId));
    }
}
