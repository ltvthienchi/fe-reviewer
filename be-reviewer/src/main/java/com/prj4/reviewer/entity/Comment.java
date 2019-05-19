package com.prj4.reviewer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "COMMENT_PRODUCT")// This tells Hibernate to make a table out of this class
public class Comment {

	@Id
	@Column(name = "ID_COMMENT_PRODUCT")
    private String idComment;

	@Column(name = "ID_PRODUCT")
	private String idProduct;

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

	@Column(name="ROLE_USER")
	private String roleUser;

	@Column(name="IS_REPORT")
	private boolean isReport;

	@Column(name="DT_UPDATE")
	private Date dateUpdate;

	public Comment(){}

	public Comment(String idComment, String idProduct, String idReviewer, String idReply, Boolean isReply,
						String content, Date dateCreate, String roleUser) {
		this.idComment = idComment;
		this.idProduct = idProduct;
		this.idReviewer = idReviewer;
		this.idReply = idReply;
		this.isReply = isReply;
		this.content = content;
		this.dateCreate = dateCreate;
		this.roleUser = roleUser;
	}

	public Comment(String idComment, String idProduct, String idReviewer, String idReply, Boolean isReply,
				   String content, Date dateCreate, String roleUser, boolean isReport) {
		this.idComment = idComment;
		this.idProduct = idProduct;
		this.idReviewer = idReviewer;
		this.idReply = idReply;
		this.isReply = isReply;
		this.content = content;
		this.dateCreate = dateCreate;
		this.roleUser = roleUser;
		this.isReport = isReport;
	}

	public Comment(String idComment, String idProduct, String idReviewer, String idReply, Boolean isReply, String content, Date dateCreate, String roleUser, boolean isReport, Date dateUpdate) {
		this.idComment = idComment;
		this.idProduct = idProduct;
		this.idReviewer = idReviewer;
		this.idReply = idReply;
		this.isReply = isReply;
		this.content = content;
		this.dateCreate = dateCreate;
		this.roleUser = roleUser;
		this.isReport = isReport;
		this.dateUpdate = dateUpdate;
	}

	public String getIdComment() {
		return idComment;
	}

	public void setIdComment(String idComment) {
		this.idComment = idComment;
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

	public String getRoleUser() {
		return roleUser;
	}

	public void setRoleUser(String roleUser) {
		this.roleUser = roleUser;
	}

	public boolean isReport() {
		return isReport;
	}

	public void setReport(boolean report) {
		isReport = report;
	}

	public Date getDateUpdate() {
		return dateUpdate;
	}

	public void setDateUpdate(Date dateUpdate) {
		this.dateUpdate = dateUpdate;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Comment comment = (Comment) o;
		return Objects.equals(idComment, comment.idComment) &&
				Objects.equals(idProduct, comment.idProduct) &&
				Objects.equals(idReviewer, comment.idReviewer) &&
				Objects.equals(idReply, comment.idReply) &&
				Objects.equals(isReply, comment.isReply) &&
				Objects.equals(content, comment.content) &&
				Objects.equals(dateCreate, comment.dateCreate);
	}

	@Override
	public int hashCode() {
		return Objects.hash(idComment, idProduct, idReviewer, idReply, isReply, content, dateCreate);
	}
}
