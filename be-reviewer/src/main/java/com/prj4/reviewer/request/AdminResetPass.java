package com.prj4.reviewer.request;

public class AdminResetPass {

    private String idAdmin;

    private String passAdmin;

    public AdminResetPass() {
    }

    public AdminResetPass(String idAdmin, String passAdmin) {
        this.idAdmin = idAdmin;
        this.passAdmin = passAdmin;
    }

    public String getIdAdmin() {
        return idAdmin;
    }

    public void setIdAdmin(String idAdmin) {
        this.idAdmin = idAdmin;
    }

    public String getPassAdmin() {
        return passAdmin;
    }

    public void setPassAdmin(String passAdmin) {
        this.passAdmin = passAdmin;
    }
}
