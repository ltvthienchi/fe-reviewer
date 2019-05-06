package com.prj4.reviewer.controller;

import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Company;
import com.prj4.reviewer.entity.FeedbackAdmin;
import com.prj4.reviewer.entity.Reviewer;
import com.prj4.reviewer.request.FeedbackAdminRequest;
import com.prj4.reviewer.service.CompanyService;
import com.prj4.reviewer.service.FeedbackAdminService;
import com.prj4.reviewer.service.GenerateId;
import com.prj4.reviewer.service.ReviewerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Date;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class FeedbackAdminController {
    private final static String BASE_POST_LINK = "/data/feedback/";

    @Autowired
    FeedbackAdminService feedbackAdminService;
    @Autowired
    ReviewerService reviewerService;
    @Autowired
    CompanyService companyService;
    @Autowired
    GenerateId generateId;

    @PostMapping(BASE_POST_LINK + "postFeedback")
    public JsonResponse<String> createFeedback(@RequestBody @Valid FeedbackAdminRequest feedbackAdminRequest){

        FeedbackAdmin feedbackAdmin = new FeedbackAdmin();
        feedbackAdmin.setIdFeedbackAdmin(generateId.generateId("FeedbackAdmin_", new Date()));
        String role = feedbackAdminRequest.getRole();
        if (role.equals("ROLE_NORMAL")){
            Reviewer reviewer = reviewerService.getReviewerByEmail(feedbackAdminRequest.getEmail());
            feedbackAdmin.setIdReviewer(reviewer.getIdReviewer());
        } else {
            Company company = companyService.getCompanyByEmail(feedbackAdminRequest.getEmail());
            feedbackAdmin.setIdReviewer(company.getIdCompany());
        }
        feedbackAdmin.setContentFeedback(feedbackAdminRequest.getContentFeedback());
        feedbackAdmin.setTitleFeedback(feedbackAdminRequest.getTitleFeedback());
        feedbackAdmin.setEmailFeedback(feedbackAdminRequest.getEmail());
        feedbackAdmin.setDtCreated(new Date());
        feedbackAdminService.createFeedback(feedbackAdmin);


        return JsonResponse.accept("");
    }

}
