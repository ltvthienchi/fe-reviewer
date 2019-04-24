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

}
