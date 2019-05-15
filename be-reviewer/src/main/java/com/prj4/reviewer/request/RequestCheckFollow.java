package com.prj4.reviewer.request;

public class RequestCheckFollow {
    private String idCompany;
    private String idUser;

    public RequestCheckFollow(String idCompany, String idUser) {
        this.idCompany = idCompany;
        this.idUser = idUser;
    }

    public String getIdCompany() {
        return idCompany;
    }

    public void setIdCompany(String idCompany) {
        this.idCompany = idCompany;
    }

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
    }
}
