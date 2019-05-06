package com.prj4.reviewer.entity;

import java.util.Date;

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
    private float rtBattery;

	@Column(name = "RT_DISPLAY")
	private float rtDisplay;

	@Column(name = "RT_PERFORMANCE")
	private float rtPerformance;

	@Column(name = "RT_DESIGN")
	private float rtDesign;

	@Column(name = "RT_CAMERA")
	private float rtCamera;

	public RatingPost() {}

	public RatingPost(String idRatingProduct, String idProduct, String idReviewer, Date dtCreated, float rtBattery, float rtDisplay, float rtPerformance, float rtDesign, float rtCamera) {
		this.idRatingProduct = idRatingProduct;
		this.idProduct = idProduct;
		this.idReviewer = idReviewer;
		this.dtCreated = dtCreated;
		this.rtBattery = rtBattery;
		this.rtDisplay = rtDisplay;
		this.rtPerformance = rtPerformance;
		this.rtDesign = rtDesign;
		this.rtCamera = rtCamera;
	}

	public String getIdRatingProduct() {
		return idRatingProduct;
	}

	public void setIdRatingProduct(String idRatingProduct) {
		this.idRatingProduct = idRatingProduct;
	}

	public String getIdProduct() {
		return idProduct;
	}

	public void setIdProduct(String idProduct) {
		this.idProduct = idProduct;
	}

	public String getIdReviewer() {
		return idReviewer;
	}

	public void setIdReviewer(String idReviewer) {
		this.idReviewer = idReviewer;
	}

	public Date getDtCreated() {
		return dtCreated;
	}

	public void setDtCreated(Date dtCreated) {
		this.dtCreated = dtCreated;
	}

	public float getRtBattery() {
		return rtBattery;
	}

	public void setRtBattery(float rtBattery) {
		this.rtBattery = rtBattery;
	}

	public float getRtDisplay() {
		return rtDisplay;
	}

	public void setRtDisplay(float rtDisplay) {
		this.rtDisplay = rtDisplay;
	}

	public float getRtPerformance() {
		return rtPerformance;
	}

	public void setRtPerformance(float rtPerformance) {
		this.rtPerformance = rtPerformance;
	}

	public float getRtDesign() {
		return rtDesign;
	}

	public void setRtDesign(float rtDesign) {
		this.rtDesign = rtDesign;
	}

	public float getRtCamera() {
		return rtCamera;
	}

	public void setRtCamera(float rtCamera) {
		this.rtCamera = rtCamera;
	}
}
