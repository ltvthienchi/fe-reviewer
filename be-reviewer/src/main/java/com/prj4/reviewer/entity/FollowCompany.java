package com.prj4.reviewer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="FOLLOW_COMPANY")// This tells Hibernate to make a table out of this class
public class FollowCompany {
	
	@Id
	@Column(name = "ID_FL_COMPANY")
    private String idFollowCompany;

	@Column(name = "ID_REVIEWER")
	private String idReviewer;

	@Column(name = "ID_COMPANY")
    private String idCompany;

	@Column(name = "IS_FOLLOW")
    private boolean isFollow;

	FollowCompany(){}

	public FollowCompany(String idFollowCompany, String idReviewer, String idCompany, boolean isFollow) {
		this.idFollowCompany = idFollowCompany;
		this.idReviewer = idReviewer;
		this.idCompany = idCompany;
		this.isFollow = isFollow;
	}

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

	public boolean isFollow() {
		return isFollow;
	}

	public void setFollow(boolean follow) {
		isFollow = follow;
	}
}
