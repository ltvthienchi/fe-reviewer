package com.prj4.reviewer.response;

import java.util.Date;

public class CompanyActiveResponse {

    private String idCompany;

    private String nameCompany;

    private String addrCompany;

    private String webCompany;

    private String zipCompany;

    private String telCompany;

    private Date dtCreated;

    private String idAccount;

    private String emailCompany;

    private float avgRatingComp;

    private boolean isActive;

    public CompanyActiveResponse(String idCompany, String nameCompany,
                                 String addrCompany, String webCompany,
                                 String zipCompany, String telCompany,
                                 Date dtCreated, String idAccount, String emailCompany,
                                 float avgRatingComp, boolean isActive) {
        this.idCompany = idCompany;
        this.nameCompany = nameCompany;
        this.addrCompany = addrCompany;
        this.webCompany = webCompany;
        this.zipCompany = zipCompany;
        this.telCompany = telCompany;
        this.dtCreated = dtCreated;
        this.idAccount = idAccount;
        this.emailCompany = emailCompany;
        this.avgRatingComp = avgRatingComp;
        this.isActive = isActive;
    }

    public String getIdCompany() {
        return idCompany;
    }

    public void setIdCompany(String idCompany) {
        this.idCompany = idCompany;
    }

    public String getNameCompany() {
        return nameCompany;
    }

    public void setNameCompany(String nameCompany) {
        this.nameCompany = nameCompany;
    }

    public String getAddrCompany() {
        return addrCompany;
    }

    public void setAddrCompany(String addrCompany) {
        this.addrCompany = addrCompany;
    }

    public String getWebCompany() {
        return webCompany;
    }

    public void setWebCompany(String webCompany) {
        this.webCompany = webCompany;
    }

    public String getZipCompany() {
        return zipCompany;
    }

    public void setZipCompany(String zipCompany) {
        this.zipCompany = zipCompany;
    }

    public String getTelCompany() {
        return telCompany;
    }

    public void setTelCompany(String telCompany) {
        this.telCompany = telCompany;
    }

    public Date getDtCreated() {
        return dtCreated;
    }

    public void setDtCreated(Date dtCreated) {
        this.dtCreated = dtCreated;
    }

    public String getIdAccount() {
        return idAccount;
    }

    public void setIdAccount(String idAccount) {
        this.idAccount = idAccount;
    }

    public String getEmailCompany() {
        return emailCompany;
    }

    public void setEmailCompany(String emailCompany) {
        this.emailCompany = emailCompany;
    }

    public float getAvgRatingComp() {
        return avgRatingComp;
    }

    public void setAvgRatingComp(float avgRatingComp) {
        this.avgRatingComp = avgRatingComp;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
