package com.prj4.reviewer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="FOLLOW_COMPANY")
public class FeedbackCompany {
    @Id
    @Column(name = "ID_FL_COMPANY")
    private String idFeedbackCompany;

    @Column(name = "ID_REVIEWER")
    private String idReviewer;

    @Column(name = "ID_COMPANY")
    private String idCompany;

    @Column(name = "COMMENT_CONTENT")
    private String commentContent;

    @Column(name = "RATING_COM")
    private int ratingCompany;

    public String getIdFeedbackCompany() {
        return idFeedbackCompany;
    }

    public void setIdFeedbackCompany(String idFeedbackCompany) {
        this.idFeedbackCompany = idFeedbackCompany;
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

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent;
    }

    public int getRatingCompany() {
        return ratingCompany;
    }

    public void setRatingCompany(int ratingCompany) {
        this.ratingCompany = ratingCompany;
    }
}
