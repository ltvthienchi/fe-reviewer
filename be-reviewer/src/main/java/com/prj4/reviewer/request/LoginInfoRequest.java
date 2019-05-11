package com.prj4.reviewer.request;

public class LoginInfoRequest {
    private String idUser;
    private String role_user;

    public LoginInfoRequest(String idUser, String role_user) {
        this.idUser = idUser;
        this.role_user = role_user;
    }

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
    }

    public String getRole_user() {
        return role_user;
    }

    public void setRole_user(String role_user) {
        this.role_user = role_user;
    }
}
