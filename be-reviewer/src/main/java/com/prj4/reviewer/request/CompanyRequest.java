package com.prj4.reviewer.request;

public class CompanyRequest {

    private String nameCompany;
    private String addrCompany;
    private String webCompany;
    private String telCompany;
    private String emailCompany;
    private String password;
    private int typeAccount;

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

    public int getTypeAccount() {
        return typeAccount;
    }

    public void setTypeAccount(int typeAccount) {
        this.typeAccount = typeAccount;
    }
}
