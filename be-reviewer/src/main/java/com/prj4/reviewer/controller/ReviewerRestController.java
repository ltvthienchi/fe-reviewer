package com.prj4.reviewer.controller;

import com.prj4.reviewer.request.CommentRequest;
import com.prj4.reviewer.request.FeedbackCompanyRequest;
import com.prj4.reviewer.response.CommentResponse;
import com.prj4.reviewer.response.FeedbackCompanyResponse;
import com.prj4.reviewer.service.PostService;
import com.prj4.reviewer.service.ReviewerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class ReviewerRestController {

    private final static String BASE_POST_LINK = "data/reviewer/";

    @Autowired
    PostService postService;

    @Autowired
    ReviewerService reviewerService;

    @PostMapping(BASE_POST_LINK + "createComment")
    public CommentResponse postComment(@RequestBody @Valid CommentRequest commentRequest) {
        CommentResponse commentResponse = postService.addComment(commentRequest);
        return commentResponse;
    }


    @PostMapping(BASE_POST_LINK + "feedbackCompany")
    public FeedbackCompanyResponse feedbackCompany(@RequestBody @Valid FeedbackCompanyRequest feebackCompanyRequest) {
        FeedbackCompanyResponse feedbackCompanyResponse = reviewerService.feedbackCompany(feebackCompanyRequest);
        return feedbackCompanyResponse;
    }
}