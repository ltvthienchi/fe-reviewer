package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Reviewer;
import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.reporsitory.FeedbackCompanyRepository;
import com.prj4.reviewer.reporsitory.ReviewerRepository;
import com.prj4.reviewer.reporsitory.UserRepository;
import com.prj4.reviewer.request.FeedbackCompanyRequest;
import com.prj4.reviewer.response.FeedbackCompanyResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ReviewerService {

    @Autowired
    FeedbackCompanyRepository feedbackCompanyRepository;
    @Autowired
    ReviewerRepository reviewerRepository;

    @Autowired
    UserRepository userRepository;

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


    public Reviewer getReviewerByEmail(String email){
        Reviewer reviewer = reviewerRepository.findByEmail(email);
        return reviewer;
    }
    // Hàm bao gồm nhưng data trong request
    public void updateInfo(String email, String firstName, String lastName,  Date dobReviewer, int gender) {
        Reviewer reviewer = reviewerRepository.findByEmail(email);
        reviewer.setDateOfBirth(dobReviewer);
        reviewer.setGender(gender);
        reviewer.setFirstName(firstName);
        reviewer.setLastName(lastName);
        reviewerRepository.save(reviewer);
    }
}
