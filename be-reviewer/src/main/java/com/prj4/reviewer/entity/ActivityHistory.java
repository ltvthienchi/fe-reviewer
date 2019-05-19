package com.prj4.reviewer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "ACTIVITY_HISTORY")
public class ActivityHistory {

    @Id
    @Column(name = "ID_HISTORY")
    private String idHistory;

    @Column(name = "ID_REVIEWER")
    private String idReviewer;

    @Column(name = "CONTENT_ACTIVITY")
    private String contentActivity;

    @Column(name = "DT_CREATED")
    private Date dtCreated;

    @Column(name = "TYPE_HISTORY")
    private String typeHistory;

    public ActivityHistory(){}

    public ActivityHistory(String idHistory, String idReviewer, String contentActivity,
                           Date dtCreated, String typeHistory) {
        this.idHistory = idHistory;
        this.idReviewer = idReviewer;
        this.contentActivity = contentActivity;
        this.dtCreated = dtCreated;
        this.typeHistory = typeHistory;
    }

    public String getIdHistory() {
        return idHistory;
    }

    public void setIdHistory(String idHistory) {
        this.idHistory = idHistory;
    }

    public String getIdReviewer() {
        return idReviewer;
    }

    public void setIdReviewer(String idReviewer) {
        this.idReviewer = idReviewer;
    }

    public String getContentActivity() {
        return contentActivity;
    }

    public void setContentActivity(String contentActivity) {
        this.contentActivity = contentActivity;
    }

    public Date getDtCreated() {
        return dtCreated;
    }

    public void setDtCreated(Date dtCreated) {
        this.dtCreated = dtCreated;
    }

    public String getTypeHistory() {
        return typeHistory;
    }

    public void setTypeHistory(String typeHistory) {
        this.typeHistory = typeHistory;
    }
}
