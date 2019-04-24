package com.prj4.reviewer.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="RATING_PRODUCT")// This tells Hibernate to make a table out of this class
public class RatingPost {
	
	@Id
	@Column(name = "ID_RATING_PRODUCT")
	private String idRatingProduct;

	@Column(name = "ID_PRODUCT")
    private String idProduct;

	@Column(name = "ID_REVIEWER")
	private String idReviewer;

	@Column(name = "DT_CREATED")
    private Date dtCreated;

	@Column(name = "RT_BATTERY")
    private int rtBattery;

	@Column(name = "RT_DISPLAY")
	private int rtDisplay;

	@Column(name = "RT_PERFORMANCE")
	private int rtPerformance;

	@Column(name = "RT_DESIGN")
	private int rtDesign;

	@Column(name = "RT_CAMERA")
	private int rtCamera;


}
