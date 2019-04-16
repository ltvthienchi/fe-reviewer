package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.FeedbackCompany;
import com.prj4.reviewer.reporsitory.FeedbackCompanyRepository;
import com.prj4.reviewer.reporsitory.FeedbackRepository;
import com.prj4.reviewer.request.FeedbackCompanyRequest;
import com.prj4.reviewer.response.FeedbackCompanyResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewerService {

    @Autowired
    FeedbackCompanyRepository feedbackCompanyRepository;

    public FeedbackCompanyResponse feedbackCompany(FeedbackCompanyRequest feedbackCompanyRequest) {

        String idFeedbackCompany = "Generate Code";

        FeedbackCompany feedbackCompany = new FeedbackCompany(idFeedbackCompany, feedbackCompanyRequest.getIdCompany(),
                feedbackCompanyRequest.getIdReviewer(),feedbackCompanyRequest.getFeedbackContent(), feedbackCompanyRequest.getRatingCompany());
        feedbackCompanyRepository.save(feedbackCompany);

        //Return follow UI need
        return new FeedbackCompanyResponse();
    }

}
