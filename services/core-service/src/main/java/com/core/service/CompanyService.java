package com.core.service;

import com.core.dto.CompanySimpleDTO;
import com.core.dto.DashboardStats;
import com.core.exception.EntityNotFoundException;
import com.core.model.Company;
import com.core.model.Job;
import com.core.model.User;
import com.core.respository.CompanyRepository;
import com.core.respository.JobRepository;
import com.core.respository.UserRepository;
import com.core.util.DashboardAggregate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private UserService userService;

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
        User user = userService.getUser(company.getAdmin().getId());
        user.setCompany(company);
        company.setAdmin(user);
        companyRepository.save(company);
        userRepository.save(user);
        return company;
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

    public List<User> getRecruters(Long id) {
        return userRepository.findByCompanyId(id);
    }

    public Company addRecruterToCompany(Long id, Long recruter_id) {
        Company company = getCompany(id);
        User user = userService.getUser(recruter_id);
        company.getRecruters().add(user);
        user.setCompany(company);
        userRepository.save(user);
        updateCompany(company.getId(), company);
        return company;
    }

    public Company removeRecruterToCompany(Long id, Long recruter_id) {
        Company company = getCompany(id);
        User user = userService.getUser(recruter_id);
        company.getRecruters().remove(user);
        user.setCompany(null);
        userRepository.save(user);
        updateCompany(company.getId(), company);
        return company;
    }

    public DashboardStats getDashboradStats(Long companyId) {
        List<Job> jobs = jobRepository.findByCompanyId(companyId);
        DashboardStats dashboardStats = new DashboardStats();
        HashMap<String, Long> response = DashboardAggregate.aggegateByProcessTotal(jobs);
        dashboardStats.setAwaitingHeadhunter(response.get("awaitingHeadhunter"));
        dashboardStats.setProcessTotal(response.get("processTotal"));
        dashboardStats.setTotalFinished(response.get("totalFinished"));
        return dashboardStats;
    }
}
