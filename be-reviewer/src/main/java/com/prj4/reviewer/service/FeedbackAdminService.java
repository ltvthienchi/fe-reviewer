package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.FeedbackAdmin;
import com.prj4.reviewer.reporsitory.FeedbackAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackAdminService {

    @Autowired
    FeedbackAdminRepository feedbackAdminRepository;

    public void createFeedback(FeedbackAdmin feedbackAdmin){
        feedbackAdminRepository.save(feedbackAdmin);
    }

    public List<FeedbackAdmin> getAll(){
       return feedbackAdminRepository.findAllByOrderByDtCreatedDesc();
    }

    public FeedbackAdmin findByIdFeedbackAdmin (String id){return feedbackAdminRepository.findByidFeedbackAdmin(id);}
    public void save(FeedbackAdmin feedbackAdmin){
        feedbackAdminRepository.save(feedbackAdmin);
    }
}
