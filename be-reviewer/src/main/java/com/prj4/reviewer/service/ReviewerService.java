package com.prj4.reviewer.service;

import com.prj4.reviewer.core.Constants;
import com.prj4.reviewer.entity.Images;
import com.prj4.reviewer.entity.Reviewer;
import com.prj4.reviewer.reporsitory.FeedbackCompanyRepository;
import com.prj4.reviewer.reporsitory.ImageRepository;
import com.prj4.reviewer.reporsitory.ReviewerRepository;
import com.prj4.reviewer.reporsitory.UserRepository;
import com.prj4.reviewer.request.FeedbackCompanyRequest;
import com.prj4.reviewer.response.FeedbackCompanyResponse;
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

    public ReviewerResponse getReviewerInfo(String email) {
        Reviewer reviewer = reviewerRepository.findByEmail(email);
        String imgAvatar = imageService.getImagePathById(reviewer.getImgAvatar());
        String imgPanel = imageService.getImagePathById(reviewer.getImgPanel());
        ReviewerResponse reviewerResponse = new ReviewerResponse(reviewer.getIdReviewer(), reviewer.getFullName(),
                reviewer.getFirstName(), reviewer.getLastName(),reviewer.getEmail(),reviewer.getDateOfBirth(),
                imgAvatar, imgPanel, reviewer.getGender());
        return reviewerResponse;
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
        reviewerRepository.save(reviewer);
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

    }

}
