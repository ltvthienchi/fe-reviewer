package com.prj4.reviewer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "FEEDBACK_ADMIN")
public class FeedbackAdmin {

    @Id
    @Column(name = "ID_FEEDBACK_ADMIN")
    private String idFeedbackAdmin;

    @Column(name = "ID_REVIEWER")
    private String idReviewer;

    @Column(name = "CONTENT_FEEDBACK")
    private String contentFeedback;

    @Column(name = "TITLE_FEEDBACK")
    private String titleFeedback;

    @Column(name = "DT_CREATED")
    private Date dtCreated;
}
