package com.prj4.reviewer.service;


import com.prj4.reviewer.core.Constants;
import com.prj4.reviewer.entity.Company;
import com.prj4.reviewer.entity.Images;
import com.prj4.reviewer.reporsitory.CompanyRepository;
import com.prj4.reviewer.reporsitory.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@Service
public class CompanyService {

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    FileStorageService fileStorageService;

    @Autowired
    ImageService imageService;

    @Autowired
    GenerateId generateId;

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

    public void updateInfo(String idCompany, String nameCompany, String webCompany, String telCompany,
                           MultipartFile avaCompany, MultipartFile panelCompany, String addrCompany) {
        Company company = companyRepository.findByIdCompany(idCompany);
        if (nameCompany != null) {
            company.setNameCompany(nameCompany);
        }

        if (webCompany != null) {
            company.setWebCompany(webCompany);
        }
        if (telCompany != null) {
            company.setTelCompany(telCompany);
        }
        if (addrCompany != null) {
            company.setAddrCompany(addrCompany);
        }
        //company.setE(emailCompany);
        if (avaCompany != null) {
            String idImage = generateId.generateId("IMAGE_", new Date());
            String fileName =  fileStorageService.storeFile(avaCompany, idImage, Constants.IMAGE_AVA);
            String fileDownloadUri = "http://localhost/img/reviewer/" + fileName;
            Images images = new Images(idImage, fileDownloadUri, Constants.IMAGE_AVA);
            imageService.saveImage(images);
            company.setImgAvatarCompany(idImage);

        }
        if (panelCompany != null) {
            String idImage = generateId.generateId("IMAGE_", new Date());
            String fileName =  fileStorageService.storeFile(panelCompany, idImage, Constants.IMAGE_PANEL);
            String fileDownloadUri = "http://localhost/img/reviewer/" + fileName;
            Images images = new Images(idImage, fileDownloadUri, Constants.IMAGE_PANEL);
            imageService.saveImage(images);
            company.setImgPanelCompany(idImage);
        }
        companyRepository.save(company);
    }
    public int getCountCompanies() {
        return companyRepository.getCountCompanies();
    }
}

