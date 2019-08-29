package com.core.controller;

import com.core.model.Rate;
import com.core.service.RateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rates")
public class RateController {

    @Autowired
    private RateService rateService;

    @GetMapping("/company/{id}")
    public ResponseEntity<?> getCompanyRates(@PathVariable Long id) {
        return ResponseEntity.ok(rateService.getCompanyRates(id));
    }

    @PostMapping("/company/{id}")
    public ResponseEntity<?> likeCompany(@PathVariable Long id, @RequestBody Rate rate) {
        return ResponseEntity.ok(rateService.likeCompany(id, rate));
    }

    @GetMapping("/profile/{id}")
    public ResponseEntity<?> getProfileRates(@PathVariable Long id) {
        return ResponseEntity.ok(rateService.getProfileRates(id));
    }

    @PostMapping("/profile/{id}")
    public ResponseEntity<?> likeProfile(@PathVariable Long id, @RequestBody Rate rate) {
        return ResponseEntity.ok(rateService.likeProfile(id, rate));
    }

    @DeleteMapping("/profile/{id}")
    public ResponseEntity<?> deleteProfileLike(@PathVariable Long id) {
        rateService.deleteLike(id);
        return ResponseEntity.ok("Deletado com sucesso");
    }

    @DeleteMapping("/company/{id}")
    public ResponseEntity<?> deleteCompanyLike(@PathVariable Long id) {
        rateService.deleteLike(id);
        return ResponseEntity.ok("Deletado com sucesso");
    }
}
