package com.prj4.reviewer.entity;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "COMMENT_PRODUCT")// This tells Hibernate to make a table out of this class
public class Comment {

	@Id
	@Column(name = "ID_COMMENT_PRODUCT")
    private String idComment;

	@Column(name = "ID_PRODUCT")
	private String idPost;

	@Column(name = "ID_REVIEWER")
	private String idReviewer;

	@Column(name = "ID_REPLY")
	// ID_ACCOUNT
	private String idReply;

	@Column(name = "IS_REPLY")
	private Boolean isReply;

	@Column(name = "CONTENT_COMMENT")
    private String content;

	@Column(name = "DT_CREATED")
    private Date dateCreate;

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

	public Boolean getReply() {
		return isReply;
	}

	public void setReply(Boolean reply) {
		isReply = reply;
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
}
