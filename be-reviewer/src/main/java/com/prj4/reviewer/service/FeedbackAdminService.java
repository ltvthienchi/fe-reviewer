package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.FeedbackAdmin;
import com.prj4.reviewer.reporsitory.FeedbackAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackAdminService {

    @Autowired
    FeedbackAdminRepository feedbackAdminRepository;

    public void createFeedback(FeedbackAdmin feedbackAdmin){
        feedbackAdminRepository.save(feedbackAdmin);
    }
}
