package com.core.service;

import com.core.model.Company;
import com.core.model.Profile;
import com.core.model.Rate;
import com.core.respository.RateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RateService {

    @Autowired
    private RateRepository rateRepository;

    @Autowired
    private CompanyService companyService;

    @Autowired
    private ProfileService profileService;

    public List<Rate> getCompanyRates(Long id) {
        Company company = companyService.getCompany(id);
        return rateRepository.findByCompany(company);
    }

    public List<Rate> getProfileRates(Long id) {
        Profile profile = profileService.getProfile(id);
        return rateRepository.findByProfile(profile);
    }

    public Rate likeCompany(Long id, Rate rate) {
        Company company = companyService.getCompany(id);
        rate.setCompany(company);
        return rateRepository.save(rate);
    }

    public Rate likeProfile(Long id, Rate rate) {
        Profile profile = profileService.getProfile(id);
        rate.setProfile(profile);
        return rateRepository.save(rate);
    }

    public void deleteLike(Long id) {
        rateRepository.deleteById(id);
    }
}
