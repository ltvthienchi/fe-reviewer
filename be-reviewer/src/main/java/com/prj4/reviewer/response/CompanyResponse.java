package com.prj4.reviewer.response;

import java.io.Serializable;

public class CompanyResponse implements Serializable {
    private String idCompany;
    private String nameCompany;
    private String addrCompany;
    private String webCompany;
    private String telCompany;
    private String imgAvatarCompany;
    private String imgPanelCompany;
    private String emailCompany;
    private float avgRatingComp;

    public CompanyResponse(String idCompany, String nameCompany, String addrCompany, String webCompany, String telCompany,
                           String imgAvatarCompany, String imgPanelCompany,
                           String emailCompany, float avgRatingComp) {
        this.idCompany = idCompany;
        this.nameCompany = nameCompany;
        this.addrCompany = addrCompany;
        this.webCompany = webCompany;
        this.telCompany = telCompany;
        this.imgAvatarCompany = imgAvatarCompany;
        this.imgPanelCompany = imgPanelCompany;
        this.emailCompany = emailCompany;
        this.avgRatingComp = avgRatingComp;
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

    public String getTelCompany() {
        return telCompany;
    }

    public void setTelCompany(String telCompany) {
        this.telCompany = telCompany;
    }

    public String getImgAvatarCompany() {
        return imgAvatarCompany;
    }

    public void setImgAvatarCompany(String imgAvatarCompany) {
        this.imgAvatarCompany = imgAvatarCompany;
    }

    public String getImgPanelCompany() {
        return imgPanelCompany;
    }

    public void setImgPanelCompany(String imgPanelCompany) {
        this.imgPanelCompany = imgPanelCompany;
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
}
