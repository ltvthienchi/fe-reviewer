package com.prj4.reviewer.response;

import java.io.Serializable;
import java.util.Date;

public class CommentResponse implements Serializable {
    private String content;
    private Date dateCreate;
    private String idComment;
    private String idProduct;
    private String idReply;
    private String idReviewer;
    private boolean reply;
    private String imgAvatar;
    private String fullName;
    private Date dateUpdate;

    public CommentResponse() {}

    public CommentResponse(String content, Date dateCreate, String idComment, String idProduct, String idReply, String idReviewer, boolean reply, String imgAvatar, String fullName, Date dateUpdate) {
        this.content = content;
        this.dateCreate = dateCreate;
        this.idComment = idComment;
        this.idProduct = idProduct;
        this.idReply = idReply;
        this.idReviewer = idReviewer;
        this.reply = reply;
        this.imgAvatar = imgAvatar;
        this.fullName = fullName;
        this.dateUpdate = dateUpdate;
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

    public String getIdReply() {
        return idReply;
    }

    public void setIdReply(String idReply) {
        this.idReply = idReply;
    }

    public String getIdReviewer() {
        return idReviewer;
    }

    public void setIdReviewer(String idReviewer) {
        this.idReviewer = idReviewer;
    }

    public boolean isReply() {
        return reply;
    }

    public void setReply(boolean reply) {
        this.reply = reply;
    }

    public String getImgAvatar() {
        return imgAvatar;
    }

    public void setImgAvatar(String imgAvatar) {
        this.imgAvatar = imgAvatar;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Date getDateUpdate() {
        return dateUpdate;
    }

    public void setDateUpdate(Date dateUpdate) {
        this.dateUpdate = dateUpdate;
    }
}
