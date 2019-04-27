package com.prj4.reviewer.entity;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class FeedbackWebsite {

	@Id
    private String idFeedback;
	
	private String idReviewer;
	
    private String content;
    
    private Date dateCreate;
    
    private Date dateUpdate;

	public String getIdFeedback() {
		return idFeedback;
	}

	public void setIdFeedback(String idFeedback) {
		this.idFeedback = idFeedback;
	}

	public String getIdReviewer() {
		return idReviewer;
	}

	public void setIdReviewer(String idReviewer) {
		this.idReviewer = idReviewer;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getDateCreate() {
		return dateCreate;
	}

	public void setDateCreate(Date dateCreate) {
		this.dateCreate = dateCreate;
	}

	public Date getDateUpdate() {
		return dateUpdate;
	}

	public void setDateUpdate(Date dateUpdate) {
		this.dateUpdate = dateUpdate;
	}

	
    
    
}
