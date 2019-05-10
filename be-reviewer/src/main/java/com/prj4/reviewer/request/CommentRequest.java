package com.prj4.reviewer.request;

import java.sql.Date;

public class CommentRequest {

    private final String idProduct;

    private final String idReviewer;

    private final String idReply;

    private final Boolean isReply;

    private final String content;

    private final String role_user;


    public CommentRequest(String idProduct, String idReviewer, String idReply,
                          Boolean isReply, String content, String role_user) {
        this.idProduct = idProduct;
        this.idReviewer = idReviewer;
        this.idReply = idReply;
        this.isReply = isReply;
        this.content = content;
        this.role_user = role_user;
    }

    public String getIdProduct() {
        return idProduct;
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

    public String getRole_user() {
        return role_user;
    }
}
