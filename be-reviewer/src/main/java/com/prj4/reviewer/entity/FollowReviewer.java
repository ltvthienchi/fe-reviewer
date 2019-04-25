package com.prj4.reviewer.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class FollowReviewer {

	@Id
    private String idFollowReviewer;

	private String idFollow;

    private String idfollowed;
    
    private Date dateFollow;
    
    private Boolean isActive;

	public String getIdFollowReviewer() {
		return idFollowReviewer;
	}

	public void setIdFollowReviewer(String idFollowReviewer) {
		this.idFollowReviewer = idFollowReviewer;
	}

	public String getIdFollow() {
		return idFollow;
	}

	public void setIdFollow(String idFollow) {
		this.idFollow = idFollow;
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

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	
    
}
