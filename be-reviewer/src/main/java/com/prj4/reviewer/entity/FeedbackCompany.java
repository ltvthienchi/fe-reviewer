package com.prj4.reviewer.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class FeedbackCompany {
    @Id
    private String idFeedbackCompany;
    private String idCompany;
    private String idReviewer;
    private String feedbackContent;
    private int ratingCompany;


    public FeedbackCompany(String idFeedbackCompany, String idCompany, String idReviewer, String feedbackContent, int ratingCompany) {
        this.idFeedbackCompany = idFeedbackCompany;
        this.idCompany = idCompany;
        this.idReviewer = idReviewer;
        this.feedbackContent = feedbackContent;
        this.ratingCompany = ratingCompany;
    }

    public String getIdFeedbackCompany() {
        return idFeedbackCompany;
    }

    public String getIdCompany() {
        return idCompany;
    }

    public String getIdReviewer() {
        return idReviewer;
    }

    public String getFeedbackContent() {
        return feedbackContent;
    }

    public int getRatingCompany() {
        return ratingCompany;
    }

    public void setIdFeedbackCompany(String idFeedbackCompany) {
        this.idFeedbackCompany = idFeedbackCompany;
    }

    public void setIdCompany(String idCompany) {
        this.idCompany = idCompany;
    }

    public void setIdReviewer(String idReviewer) {
        this.idReviewer = idReviewer;
    }

    public void setFeedbackContent(String feedbackContent) {
        this.feedbackContent = feedbackContent;
    }

    public void setRatingCompany(int ratingCompany) {
        this.ratingCompany = ratingCompany;
    }
}
