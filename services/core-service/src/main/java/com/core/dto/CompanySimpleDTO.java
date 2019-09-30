package com.core.dto;

import com.core.model.Address;
import com.core.model.Rate;

import java.util.List;

public class CompanySimpleDTO {

    private Long id;
    private String name;
    private String description;
    private Address address;
    private List<Rate> rates;

    public CompanySimpleDTO() {
    }

    public CompanySimpleDTO(Long id, String name, String description, Address address, List<Rate> rates) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.rates = rates;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public List<Rate> getRates() {
        return rates;
    }

    public void setRates(List<Rate> rates) {
        this.rates = rates;
    }
}
