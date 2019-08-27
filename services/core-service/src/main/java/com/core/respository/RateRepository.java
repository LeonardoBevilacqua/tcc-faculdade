package com.core.respository;

import com.core.model.Company;
import com.core.model.Profile;
import com.core.model.Rate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RateRepository extends JpaRepository<Rate, Long> {

    List<Rate> findByCompany(Company company);
    List<Rate> findByProfile(Profile profile);
}
