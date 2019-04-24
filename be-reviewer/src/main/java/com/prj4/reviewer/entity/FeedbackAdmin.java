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

    public String getIdFeedbackAdmin() {
        return idFeedbackAdmin;
    }

    public void setIdFeedbackAdmin(String idFeedbackAdmin) {
        this.idFeedbackAdmin = idFeedbackAdmin;
    }

    public String getIdReviewer() {
        return idReviewer;
    }

    public void setIdReviewer(String idReviewer) {
        this.idReviewer = idReviewer;
    }

    public String getContentFeedback() {
        return contentFeedback;
    }

    public void setContentFeedback(String contentFeedback) {
        this.contentFeedback = contentFeedback;
    }

    public String getTitleFeedback() {
        return titleFeedback;
    }

    public void setTitleFeedback(String titleFeedback) {
        this.titleFeedback = titleFeedback;
    }

    public Date getDtCreated() {
        return dtCreated;
    }

    public void setDtCreated(Date dtCreated) {
        this.dtCreated = dtCreated;
    }
}
