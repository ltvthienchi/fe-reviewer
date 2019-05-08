package com.prj4.reviewer.service;


import com.prj4.reviewer.entity.Company;
import com.prj4.reviewer.entity.Images;
import com.prj4.reviewer.reporsitory.CompanyRepository;
import com.prj4.reviewer.reporsitory.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    ImageRepository imageRepository;

    public List<Company> getAll() {
        return (List<Company>) companyRepository.findAll();
    }

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

    public Company getCompanyByEmail(String email) {
        Company company = companyRepository.findByEmailCompany(email);
        return company;
    }
    public String getCompanyId(String email) {
        return companyRepository.findByEmailCompany(email).getIdCompany();
    }

    public String getNameCompanyById(String idCompany) {
        return companyRepository.findByIdCompany(idCompany).getNameCompany();
    }

    public String getImageAvaComp(String idCompany) {
        String idImage = companyRepository.findByIdCompany(idCompany).getImgAvatarCompany();
        return imageRepository.findByIdImage(idImage).getImgPath();
    }

    public Company getCompanyById(String idCompany) {
        return companyRepository.findByIdCompany(idCompany);
    }
}

