package com.prj4.reviewer.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class FollowCompany {
	
	@Id
    private String idFollowCompany;

	private String idReviewer;

    private String idCompany;
    
    private String rating;
    
    private Boolean isFollow;
    
    private Boolean isActive;

	public String getIdFollowCompany() {
		return idFollowCompany;
	}

	public void setIdFollowCompany(String idFollowCompany) {
		this.idFollowCompany = idFollowCompany;
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

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public Boolean getIsFollow() {
		return isFollow;
	}

	public void setIsFollow(Boolean isFollow) {
		this.isFollow = isFollow;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	
    

}
