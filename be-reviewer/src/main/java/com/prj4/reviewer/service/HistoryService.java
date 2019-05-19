package com.prj4.reviewer.service;

import com.google.gson.JsonObject;
import com.prj4.reviewer.core.Constants;
import com.prj4.reviewer.entity.ActivityHistory;
import com.prj4.reviewer.reporsitory.ActivityHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class HistoryService {

    @Autowired
    ActivityHistoryRepository activityHistoryRepository;

    @Autowired
    ReviewerService reviewerService;

    @Autowired
    ProductService productService;

    @Autowired
    CompanyService companyService;

    @Autowired
    GenerateId generateId;

    public void createRatingHistory(String idReviewer,String idProduct) {
        //History Activity
        JsonObject activityHistoryJson = new JsonObject();
        String reviewerName = reviewerService.getReviewerByIdReviewer(idReviewer).getFullName();
        String nameProduct = productService.getProductById(idProduct).getNameProduct();
        activityHistoryJson.addProperty("reviewerName", reviewerName);
        activityHistoryJson.addProperty("idProduct", idProduct);
        activityHistoryJson.addProperty("productName", nameProduct);
        activityHistoryJson.addProperty("typeActivity", Constants.RATING_ACTIVITY);

        saveActivity(idReviewer, activityHistoryJson.toString());
    }

    public void createCommentHistory(String idReviewer, String contentComment, String idProduct) {
        //History Activity
        JsonObject activityHistoryJson = new JsonObject();
        String reviewerName = reviewerService.getReviewerByIdReviewer(idReviewer).getFullName();
        String nameProduct = productService.getProductById(idProduct).getNameProduct();
        activityHistoryJson.addProperty("reviewerName", reviewerName);
        activityHistoryJson.addProperty("contentComment", contentComment);
        activityHistoryJson.addProperty("idProduct", idProduct);
        activityHistoryJson.addProperty("productName", nameProduct);
        activityHistoryJson.addProperty("typeActivity", Constants.COMMENT_ACTIVITY);

        saveActivity(idReviewer, activityHistoryJson.toString());
    }

    public void createReviewCompHistory(String idReviewer, String idCompany, int type) {
        //History Activity
        JsonObject activityHistoryJson = new JsonObject();
        String reviewerName = reviewerService.getReviewerByIdReviewer(idReviewer).getFullName();
        String nameCompany = companyService.getNameCompanyById(idCompany);
        activityHistoryJson.addProperty("reviewerName", reviewerName);
        activityHistoryJson.addProperty("idCompany", idCompany);
        activityHistoryJson.addProperty("nameCompany", nameCompany);
        if (type == 1) {
            activityHistoryJson.addProperty("typeActivity", Constants.REVIEWCOMP_ACTIVITY);
        } else if (type == 2){
            activityHistoryJson.addProperty("typeActivity", Constants.FOLLOW_ACTIVITY);
        } else {
            activityHistoryJson.addProperty("typeActivity", Constants.UN_FOLLOW_ACTIVITY);
        }


        saveActivity(idReviewer, activityHistoryJson.toString());
    }

    public void createUpdateInfoHistory(String idReviewer, String imgPath, int type) {
        //History Activity
        JsonObject activityHistoryJson = new JsonObject();
        String reviewerName = reviewerService.getReviewerByIdReviewer(idReviewer).getFullName();
        activityHistoryJson.addProperty("reviewerName", reviewerName);
        if (type == 1) {
            activityHistoryJson.addProperty("imgAva", imgPath);
            activityHistoryJson.addProperty("typeActivity", Constants.UPDATE_IMGAVA_ACTIVITY);
        } else {
            activityHistoryJson.addProperty("imgPanel", imgPath);
            activityHistoryJson.addProperty("typeActivity", Constants.UPDATE_IMGPANEL_ACTIVITY);
        }

        saveActivity(idReviewer, activityHistoryJson.toString());
    }

    public void saveActivity(String idReviewer, String activityHistoryJson) {
        String idHistory = generateId.generateId("HISTORY_", new Date());
        ActivityHistory activityHistory = new ActivityHistory(idHistory, idReviewer,
                activityHistoryJson, new Date());

        activityHistoryRepository.save(activityHistory);
    }

    public List<ActivityHistory> getActivityHistory(String idReviewer) {
        return activityHistoryRepository.getActivityHistory(idReviewer);
    }
}
