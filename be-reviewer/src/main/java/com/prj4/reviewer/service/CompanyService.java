package com.prj4.reviewer.service;


import com.prj4.reviewer.entity.Company;
import com.prj4.reviewer.reporsitory.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyService {

    @Autowired
    CompanyRepository companyRepository;


    public String getFullName(String idAccount) {
        return companyRepository.findByIdAccount(idAccount).getNameCompany();
    }
    public void saveCompany(Company company) {
        companyRepository.save(company);
    }

    public boolean isExistingCompany(String companyEmail) {
        Company comp = companyRepository.findByEmailCompany(companyEmail);
        if (comp == null) {
            return false;
        } else {
            return true;
        }
    }

    public Company getCompanyByEmail(String email){
        Company company = companyRepository.findByEmailCompany(email);
        return company;

    public String getCompanyId(String email) {
        return companyRepository.findByEmailCompany(email).getIdCompany();
    }
}

