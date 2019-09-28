package com.core.service;

import com.core.dto.CompanySimpleDTO;
import com.core.exception.EntityNotFoundException;
import com.core.model.Company;
import com.core.respository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public List<CompanySimpleDTO> getCompanies() {
        return companyRepository.findAll()
                .stream()
                .map(company -> new CompanySimpleDTO(
                        company.getId(),
                        company.getName(),
                        company.getDescription(),
                        company.getAddress(),
                        company.getRates()))
                .collect(Collectors.toList());
    }

    public Company getCompany(Long id) {
        Optional<Company> jobOpt = companyRepository.findById(id);
        if (jobOpt.isEmpty()) {
            throw new EntityNotFoundException("Empresa não encontrada");
        }
        return jobOpt.get();
    }

    public Company saveCompany(Company company) {
        return companyRepository.save(company);
    }

    public Company updateCompany(Long id, Company company) {
        Company companyFound = getCompany(id);
        companyFound = company;
        return companyRepository.save(companyFound);
    }

    public CompanySimpleDTO getSimpleCompany(Long id) {
        Company company = getCompany(id);
        return new CompanySimpleDTO(
                company.getId(),
                company.getName(),
                company.getDescription(),
                company.getAddress(),
                company.getRates());
    }
}
