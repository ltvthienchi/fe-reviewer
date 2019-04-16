package com.prj4.reviewer.request;

import java.sql.Date;

public class CommentRequest {

    private final String idPost;

    private final String idReviewer;

    private final String idReply;

    private final Boolean isReply;

    private final String content;

    private final Date dateCreate;

    private final Date dateUpdate;

    public CommentRequest(String idPost, String idReviewer, String idReply, Boolean isReply, String content, Date dateCreate, Date dateUpdate) {
        this.idPost = idPost;
        this.idReviewer = idReviewer;
        this.idReply = idReply;
        this.isReply = isReply;
        this.content = content;
        this.dateCreate = dateCreate;
        this.dateUpdate = dateUpdate;
    }

    public String getIdPost() {
        return idPost;
    }

    public String getIdReviewer() {
        return idReviewer;
    }

    public String getIdReply() {
        return idReply;
    }

    public Boolean getReply() {
        return isReply;
    }

    public String getContent() {
        return content;
    }

    public Date getDateCreate() {
        return dateCreate;
    }

    public Date getDateUpdate() {
        return dateUpdate;
    }

}
