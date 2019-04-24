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

}
