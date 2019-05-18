package com.prj4.reviewer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name="REVIEW_COMPANY")
public class ReviewCompany {

    @Id
    @Column(name = "ID_RV_COMPANY")
    private String idReviewCompany;

    @Column(name = "ID_REVIEWER")
    private String idReviewer;

    @Column(name = "ID_COMPANY")
    private String idCompany;

    @Column(name = "RATING_COM")
    private float ratingComp;

    @Column(name = "COMMENT_CONTENT")
    private String commentContent;

    @Column(name = "DT_CREATED")
    private Date dtCreated;

    public ReviewCompany() {
    }

    public ReviewCompany(String idReviewCompany, String idReviewer, String idCompany, float ratingComp, String commentContent, Date dtCreated) {
        this.idReviewCompany = idReviewCompany;
        this.idReviewer = idReviewer;
        this.idCompany = idCompany;
        this.ratingComp = ratingComp;
        this.commentContent = commentContent;
        this.dtCreated = dtCreated;
    }

    public String getIdFollowCompany() {
        return idReviewCompany;
    }

    public void setIdFollowCompany(String idFollowCompany) {
        this.idReviewCompany = idFollowCompany;
    }

    public String getIdReviewer() {
        return idReviewer;
    }

    public void setIdReviewer(String idReviewer) {
        this.idReviewer = idReviewer;
    }

    public String getIdCompany() {
        return idCompany;
    }

    public void setIdCompany(String idCompany) {
        this.idCompany = idCompany;
    }

    public float getRatingComp() {
        return ratingComp;
    }

    public void setRatingComp(float ratingComp) {
        this.ratingComp = ratingComp;
    }

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent;
    }

    public String getIdReviewCompany() {
        return idReviewCompany;
    }

    public void setIdReviewCompany(String idReviewCompany) {
        this.idReviewCompany = idReviewCompany;
    }

    public Date getDtCreated() {
        return dtCreated;
    }

    public void setDtCreated(Date dtCreated) {
        this.dtCreated = dtCreated;
    }
}
