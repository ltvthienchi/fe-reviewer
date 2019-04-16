package com.prj4.reviewer.entity;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Comment {

	@Id
    private String idComment;
	
	private String idPost;
	
	private String idReviewer;

	private String idReply;
	
	private Boolean isReply;
	
    private String content;
    
    private Date dateCreate;
    
    private Date dateUpdate;

	public Comment(String idComment, String idPost, String idReviewer, String idReply, Boolean isReply, String content, Date dateCreate, Date dateUpdate) {
		this.idComment = idComment;
		this.idPost = idPost;
		this.idReviewer = idReviewer;
		this.idReply = idReply;
		this.isReply = isReply;
		this.content = content;
		this.dateCreate = dateCreate;
		this.dateUpdate = dateUpdate;
	}

	public String getIdComment() {
		return idComment;
	}

	public void setIdComment(String idComment) {
		this.idComment = idComment;
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

	public String getIdReply() {
		return idReply;
	}

	public void setIdReply(String idReply) {
		this.idReply = idReply;
	}

	public Boolean getIsReply() {
		return isReply;
	}

	public void setIsReply(Boolean isReply) {
		this.isReply = isReply;
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
