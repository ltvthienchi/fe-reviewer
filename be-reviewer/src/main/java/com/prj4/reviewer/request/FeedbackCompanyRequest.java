package com.prj4.reviewer.request;

public class FeedbackCompanyRequest {
    private final String idCompany;
    private final String idReviewer;
    private final String feedbackContent;
    private final int ratingCompany;

    public FeedbackCompanyRequest(String idCompany, String idReviewer, String feedbackContent, int ratingCompany) {
        this.idCompany = idCompany;
        this.idReviewer = idReviewer;
        this.feedbackContent = feedbackContent;
        this.ratingCompany = ratingCompany;
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
}
