package com.prj4.reviewer.response;

import java.io.Serializable;
import java.util.Date;

public class ReviewCompanyResponse implements Serializable {

    private String fullName;
    private String idReviewer;
    private String imgAvatar;
    private float numbRating;
    private String contentComment;
    private Date dtCreate;

    public ReviewCompanyResponse(String fullName, String idReviewer, String imgAvatar, float numbRating, String contentComment, Date dtCreate) {
        this.fullName = fullName;
        this.idReviewer = idReviewer;
        this.imgAvatar = imgAvatar;
        this.numbRating = numbRating;
        this.contentComment = contentComment;
        this.dtCreate = dtCreate;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getIdReviewer() {
        return idReviewer;
    }

    public void setIdReviewer(String idReviewer) {
        this.idReviewer = idReviewer;
    }

    public String getImgAvatar() {
        return imgAvatar;
    }

    public void setImgAvatar(String imgAvatar) {
        this.imgAvatar = imgAvatar;
    }

    public float getNumbRating() {
        return numbRating;
    }

    public void setNumbRating(float numbRating) {
        this.numbRating = numbRating;
    }

    public String getContentComment() {
        return contentComment;
    }

    public void setContentComment(String contentComment) {
        this.contentComment = contentComment;
    }

    public Date getDtCreate() {
        return dtCreate;
    }

    public void setDtCreate(Date dtCreate) {
        this.dtCreate = dtCreate;
    }
}
