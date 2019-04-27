package com.prj4.reviewer.request;

import java.util.Date;

public class CompanyRequest {

    private String nameCompany;
    private String addrCompany;
    private String webCompany;
    private String telCompany;
    private long dtCreated;
    private String emailCompany;
    private String password;
    private String confirmPassword;

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

    public String getTelCompany() {
        return telCompany;
    }

    public void setTelCompany(String telCompany) {
        this.telCompany = telCompany;
    }

    public long getDtCreated() {
        return dtCreated;
    }

    public void setDtCreated(long dtCreated) {
        this.dtCreated = dtCreated;
    }

    public String getEmailCompany() {
        return emailCompany;
    }

    public void setEmailCompany(String emailCompany) {
        this.emailCompany = emailCompany;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
