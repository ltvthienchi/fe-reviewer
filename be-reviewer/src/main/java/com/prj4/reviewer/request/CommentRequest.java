package com.prj4.reviewer.request;

import java.sql.Date;

public class CommentRequest {

    private final String idProduct;

    private final String idReviewer;

    private final String idReply;

    private final Boolean isReply;

    private final String content;


    public CommentRequest(String idProduct, String idReviewer, String idReply, Boolean isReply, String content) {
        this.idProduct = idProduct;
        this.idReviewer = idReviewer;
        this.idReply = idReply;
        this.isReply = isReply;
        this.content = content;
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

}
