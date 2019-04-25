package com.prj4.reviewer.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class RatingPost {
	
	@Id
	private String idRating;
	
    private String idPost;

	private String idReviewer;

    private int rating;
    
    private Date dateUpdate;

	public String getIdRating() {
		return idRating;
	}

	public void setIdRating(String idRating) {
		this.idRating = idRating;
	}

	public String getIdPost() {
		return idPost;
	}

	public void setIdPost(String idPost) {
		this.idPost = idPost;
	}

	public String getIdReviewer() {
		return idReviewer;
	}

	public void setIdReviewer(String idReviewer) {
		this.idReviewer = idReviewer;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public Date getDateUpdate() {
		return dateUpdate;
	}

	public void setDateUpdate(Date dateUpdate) {
		this.dateUpdate = dateUpdate;
	}

	
    

}
