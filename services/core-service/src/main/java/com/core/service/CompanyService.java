package com.core.service;

import com.core.exception.EntityNotFoundException;
import com.core.model.Company;
import com.core.respository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }

    public Company getCompany(Long id) {
        Optional<Company> jobOpt = companyRepository.findById(id);
        if (jobOpt.isEmpty()) {
            throw new EntityNotFoundException("Empresa não encontrada");
        }
        return jobOpt.get();
    }

    public Company saveCompany(Company job) {
        return companyRepository.save(job);
    }
}
