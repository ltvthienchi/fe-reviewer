package com.prj4.reviewer.request;

public class AdminBlockRequest {

    private String idAdmin;

    private Boolean isActive;


    public AdminBlockRequest() {
    }

    public AdminBlockRequest(String idAdmin, Boolean isActive) {
        this.idAdmin = idAdmin;
        this.isActive = isActive;
    }

    public String getIdAdmin() {
        return idAdmin;
    }

    public void setIdAdmin(String idAdmin) {
        this.idAdmin = idAdmin;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }
}
