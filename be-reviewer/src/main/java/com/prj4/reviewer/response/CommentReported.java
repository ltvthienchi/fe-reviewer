package com.prj4.reviewer.response;

import java.io.Serializable;
import java.util.Date;

public class CommentReported implements Serializable {

    private String idComment;
    private String reviewerComment;
    private String contentComment;
    private Date dateComment;

    public CommentReported(String idComment, String reviewerComment, String contentComment, Date dateComment) {
        this.idComment = idComment;
        this.reviewerComment = reviewerComment;
        this.contentComment = contentComment;
        this.dateComment = dateComment;
    }

    public String getIdComment() {
        return idComment;
    }

    public void setIdComment(String idComment) {
        this.idComment = idComment;
    }

    public String getReviewerComment() {
        return reviewerComment;
    }

    public void setReviewerComment(String reviewerComment) {
        this.reviewerComment = reviewerComment;
    }

    public String getContentComment() {
        return contentComment;
    }

    public void setContentComment(String contentComment) {
        this.contentComment = contentComment;
    }

    public Date getDateComment() {
        return dateComment;
    }

    public void setDateComment(Date dateComment) {
        this.dateComment = dateComment;
    }
}
