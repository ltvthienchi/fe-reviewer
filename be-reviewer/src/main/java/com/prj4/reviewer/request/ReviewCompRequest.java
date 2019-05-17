package com.prj4.reviewer.request;

public class ReviewCompRequest {
    private String idReviewer;
    private String idCompany;
    private float ratingComp;
    private String contentComment;

    public ReviewCompRequest(String idReviewer, String idCompany, float ratingComp, String contentComment) {
        this.idReviewer = idReviewer;
        this.idCompany = idCompany;
        this.ratingComp = ratingComp;
        this.contentComment = contentComment;
    }

    public String getIdReviewer() {
        return idReviewer;
    }

    public String getIdCompany() {
        return idCompany;
    }

    public float getRatingComp() {
        return ratingComp;
    }

    public String getContentComment() {
        return contentComment;
    }

    public void setIdReviewer(String idReviewer) {
        this.idReviewer = idReviewer;
    }

    public void setIdCompany(String idCompany) {
        this.idCompany = idCompany;
    }

    public void setRatingComp(float ratingComp) {
        this.ratingComp = ratingComp;
    }

    public void setContentComment(String contentComment) {
        this.contentComment = contentComment;
    }
}
