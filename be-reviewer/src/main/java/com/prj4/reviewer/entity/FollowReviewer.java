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
	@Column(name = "ID_FL_REVIWER")
    private String idFollowReviewer;

	@Column(name = "ID_REVIEWER")
	private String idReviewer;

	@Column(name = "ID_FL_REVIWER")
    private String idfollowed;

	@Column(name = "DT_FOLLOW")
    private Date dateFollow;

}
