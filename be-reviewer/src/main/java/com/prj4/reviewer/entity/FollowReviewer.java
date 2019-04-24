package com.prj4.reviewer.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="FOLLOW_REVIEWER")// This tells Hibernate to make a table out of this class
public class FollowReviewer {

	@Id
	@Column(name = "ID_FL_REVIEWER")
    private String idFollowReviewer;

	@Column(name = "ID_REVIEWER")
	private String idReviewer;

	@Column(name = "ID_FOLLOWED")
    private String idfollowed;

	@Column(name = "DT_FOLLOW")
    private Date dateFollow;

	public String getIdFollowReviewer() {
		return idFollowReviewer;
	}

	public void setIdFollowReviewer(String idFollowReviewer) {
		this.idFollowReviewer = idFollowReviewer;
	}

	public String getIdReviewer() {
		return idReviewer;
	}

	public void setIdReviewer(String idReviewer) {
		this.idReviewer = idReviewer;
	}

	public String getIdfollowed() {
		return idfollowed;
	}

	public void setIdfollowed(String idfollowed) {
		this.idfollowed = idfollowed;
	}

	public Date getDateFollow() {
		return dateFollow;
	}

	public void setDateFollow(Date dateFollow) {
		this.dateFollow = dateFollow;
	}
}
