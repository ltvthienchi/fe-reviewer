package com.prj4.reviewer.response;

import java.io.Serializable;

public class ReviewerInfoResponse implements Serializable {
    private String imgAvatar;
    private String fullName;

    public ReviewerInfoResponse(String imgAvatar, String fullName) {
        this.imgAvatar = imgAvatar;
        this.fullName = fullName;
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
}
