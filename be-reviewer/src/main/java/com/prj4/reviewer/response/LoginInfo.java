package com.prj4.reviewer.response;

public class LoginInfo {
    private String fullName;
    private String avatar;

    public LoginInfo(String fullName, String avatar) {
        this.fullName = fullName;
        this.avatar = avatar;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
