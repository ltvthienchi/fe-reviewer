package com.prj4.reviewer.controller;

import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Reviewer;
import com.prj4.reviewer.reporsitory.ReviewerRepository;
import com.prj4.reviewer.request.CommentRequest;
import com.prj4.reviewer.request.FeedbackCompanyRequest;
import com.prj4.reviewer.request.ReviewerRequest;
import com.prj4.reviewer.response.CommentResponse;
import com.prj4.reviewer.response.FeedbackCompanyResponse;
import com.prj4.reviewer.service.PostService;
import com.prj4.reviewer.service.ReviewerService;
import com.prj4.reviewer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ReviewerRestController {

    private final static String BASE_POST_LINK = "/data/reviewer/";

    @Autowired
    PostService postService;

    @Autowired
    ReviewerService reviewerService;

    @Autowired
    ReviewerRepository reviewerRepository;

    @Autowired
    UserService userService;

    @PostMapping(BASE_POST_LINK + "createComment")
    public CommentResponse postComment(@RequestBody @Valid CommentRequest commentRequest) {
        CommentResponse commentResponse = postService.addComment(commentRequest);
        return commentResponse;
    }


    @PostMapping(BASE_POST_LINK + "feedbackCompany")
    public FeedbackCompanyResponse feedbackCompany(@RequestBody @Valid FeedbackCompanyRequest feedbackCompanyRequest) {
        FeedbackCompanyResponse feedbackCompanyResponse = reviewerService.feedbackCompany(feedbackCompanyRequest);
        return feedbackCompanyResponse;
    }

    @GetMapping(BASE_POST_LINK + "reviewers")
    List<Reviewer> getReviewers() {
        return (List<Reviewer>) reviewerRepository.findAll();
    }

    @PostMapping(BASE_POST_LINK + "getReviewerInfo")
    Reviewer getReviewerInfo(@RequestBody String email) {
        return reviewerService.getReviewerInfo(email);
    }

    @PostMapping(BASE_POST_LINK + "updateReview")
    public JsonResponse<String> updateReviewer(@RequestBody @Valid ReviewerRequest reviewerRequest) {
        String email = reviewerRequest.getEmail();
        String firstName = reviewerRequest.getFirstName();
        String lastName = reviewerRequest.getLastName();
        int gender = reviewerRequest.getGender();
        //        // Call service
        try {
            Date dobReviewer = new SimpleDateFormat("dd/MM/yyyy").parse(reviewerRequest.getDobReviewer());
            reviewerService.updateInfo(email, firstName, lastName, dobReviewer, gender);
//            reviewerService.saveReviewer(reviewer);
            return JsonResponse.accept("Success");
        } catch (Exception ex) {
            return JsonResponse.reject(ex.getMessage());
        }
    }
    }
