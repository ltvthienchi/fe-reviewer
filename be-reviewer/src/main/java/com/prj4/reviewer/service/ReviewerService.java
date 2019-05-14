package com.prj4.reviewer.service;

import com.prj4.reviewer.core.Constants;
import com.prj4.reviewer.entity.Admin;
import com.prj4.reviewer.entity.Company;
import com.prj4.reviewer.entity.Images;
import com.prj4.reviewer.entity.Reviewer;
import com.prj4.reviewer.reporsitory.*;
import com.prj4.reviewer.request.FeedbackCompanyRequest;
import com.prj4.reviewer.response.FeedbackCompanyResponse;
import com.prj4.reviewer.response.ReviewerInfoResponse;
import com.prj4.reviewer.response.ReviewerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Service
public class ReviewerService {

    @Autowired
    FeedbackCompanyRepository feedbackCompanyRepository;
    @Autowired
    ReviewerRepository reviewerRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    GenerateId generateId;

    @Autowired
    ImageService imageService;

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    FileStorageService fileStorageService;

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    AdminRepository adminRepository;

    public FeedbackCompanyResponse feedbackCompany(FeedbackCompanyRequest feedbackCompanyRequest) {
        return null;
    }
    public String getFullName(String idAccount) {
        return reviewerRepository.findByIdAccount(idAccount).getFullName();
    }
    public void saveReviewer(Reviewer reviewer) {
        reviewerRepository.save(reviewer);
    }

    public boolean isExistingReviewer(String emailReviewer) {
        Reviewer reviewer = reviewerRepository.findByEmail(emailReviewer);
        if (reviewer == null) {
            return false;
        } else {
            return true;
        }
    }

    public ReviewerInfoResponse getReviewerInfo(String email, String role) {
        ReviewerInfoResponse reviewerResponse = null;
        String fullName = null;
        String imgAvatar = null;
        if (role.equals("ROLE_NORMAL")) {
            Reviewer reviewer = reviewerRepository.findByEmail(email);
            fullName = reviewer.getFullName();
            imgAvatar = imageService.getImagePathById(reviewer.getImgAvatar());
        } else if (role.equals("ROLE_COMPANY")) {
            Company company = companyRepository.findByEmailCompany(email);
            fullName = company.getNameCompany();
            imgAvatar = imageService.getImagePathById(company.getImgAvatarCompany());
        } else {
            Admin admin = adminRepository.findByEmailAdmin(email);
            fullName = admin.getFullNameAdmin();
            imgAvatar = "http://localhost/img/reviewer/avar-pay.png";
        }

        return new ReviewerInfoResponse(imgAvatar, fullName);
    }

    public ReviewerResponse getReviewerInfoById(String idReviewer) {
        Reviewer reviewer = reviewerRepository.findByIdReviewer(idReviewer);
        String imgAvatar = imageService.getImagePathById(reviewer.getImgAvatar());
        String imgPanel = imageService.getImagePathById(reviewer.getImgPanel());
        return new ReviewerResponse(reviewer.getIdReviewer(), reviewer.getFullName(),
                reviewer.getFirstName(), reviewer.getLastName(),reviewer.getEmail(),reviewer.getDateOfBirth(),
                imgAvatar, imgPanel, reviewer.getGender());
//        return reviewerResponse;
    }

    public String getReviewerIdByEmail(String email){
        //reviewerRepository.findByEmail(email);
        return reviewerRepository.findByEmail(email).getIdReviewer();
    }
    // Hàm bao gồm nhưng data trong request
    public void updateInfo(String idReviewer, String firstName, String lastName, Date dobReviewer, int gender,
                           MultipartFile avaReviewer, MultipartFile panelReviewer) {
        Reviewer reviewer = reviewerRepository.findByIdReviewer(idReviewer);
        reviewer.setDateOfBirth(dobReviewer);
        reviewer.setGender(gender);
        reviewer.setFirstName(firstName);
        reviewer.setLastName(lastName);
        reviewer.setFullName(firstName + " " + lastName);
        if (avaReviewer != null) {
            Images images = imageRepository.findByIdImage(reviewer.getImgAvatar());
            String fileName =  fileStorageService.storeFile(avaReviewer, images.getIdImage(), Constants.IMAGE_AVA);
            String fileDownloadUri = "http://localhost/img/reviewer/" + fileName;
            images.setImgPath(fileDownloadUri);
        }
        if (panelReviewer != null) {
            Images images = imageRepository.findByIdImage(reviewer.getImgPanel());
            String fileName =  fileStorageService.storeFile(panelReviewer, images.getIdImage(), Constants.IMAGE_PANEL);
            String fileDownloadUri = "http://localhost/img/reviewer/" + fileName;
            images.setImgPath(fileDownloadUri);
        }
        reviewerRepository.save(reviewer);
    }

    public Reviewer getReviewerByIdReviewer(String idReviewer) {
        return reviewerRepository.findByIdReviewer(idReviewer);
    }

    public String getImageAvatarByIdReviewer(String idReviewer) {
        String idImage = reviewerRepository.findByIdReviewer(idReviewer).getImgAvatar();
        return imageService.getImagePathById(idImage);
    }

}
