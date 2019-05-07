package com.prj4.reviewer.request;

import javax.persistence.Column;
import javax.persistence.Id;
import java.sql.Date;

public class AdminRequest {

    private String idAdmin;

    private String fullNameAdmin;

    private String emailAdmin;

    private String passAdmin;

    private Date dobAdmin;

    private Date dtCreated;

    private boolean isActive;

    private String addressAdmin;

    private String phoneAdmin;

    public AdminRequest() {
    }

    public AdminRequest(String idAdmin, String fullNameAdmin, String emailAdmin, String passAdmin, Date dobAdmin, Date dtCreated, boolean isActive, String addressAdmin, String phoneAdmin) {
        this.idAdmin = idAdmin;
        this.fullNameAdmin = fullNameAdmin;
        this.emailAdmin = emailAdmin;
        this.passAdmin = passAdmin;
        this.dobAdmin = dobAdmin;
        this.dtCreated = dtCreated;
        this.isActive = isActive;
        this.addressAdmin = addressAdmin;
        this.phoneAdmin = phoneAdmin;
    }

    public Date getDtCreated() {
        return dtCreated;
    }

    public void setDtCreated(Date dtCreated) {
        this.dtCreated = dtCreated;
    }

    public String getIdAdmin() {
        return idAdmin;
    }

    public void setIdAdmin(String idAdmin) {
        this.idAdmin = idAdmin;
    }

    public String getFullNameAdmin() {
        return fullNameAdmin;
    }

    public void setFullNameAdmin(String fullNameAdmin) {
        this.fullNameAdmin = fullNameAdmin;
    }

    public String getEmailAdmin() {
        return emailAdmin;
    }

    public void setEmailAdmin(String emailAdmin) {
        this.emailAdmin = emailAdmin;
    }

    public String getPassAdmin() {
        return passAdmin;
    }

    public void setPassAdmin(String passAdmin) {
        this.passAdmin = passAdmin;
    }

    public Date getDobAdmin() {
        return dobAdmin;
    }

    public void setDobAdmin(Date dobAdmin) {
        this.dobAdmin = dobAdmin;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public String getAddressAdmin() {
        return addressAdmin;
    }

    public void setAddressAdmin(String addressAdmin) {
        this.addressAdmin = addressAdmin;
    }

    public String getPhoneAdmin() {
        return phoneAdmin;
    }

    public void setPhoneAdmin(String phoneAdmin) {
        this.phoneAdmin = phoneAdmin;
    }
}
