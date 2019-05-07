package com.prj4.reviewer.request;

public class AdminBlockRequest {

    private String idAdmin;

    private boolean isActive;


    public AdminBlockRequest() {
    }

    public AdminBlockRequest(String idAdmin, boolean isActive) {
        this.idAdmin = idAdmin;
        this.isActive = isActive;
    }

    public String getIdAdmin() {
        return idAdmin;
    }

    public void setIdAdmin(String idAdmin) {
        this.idAdmin = idAdmin;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
