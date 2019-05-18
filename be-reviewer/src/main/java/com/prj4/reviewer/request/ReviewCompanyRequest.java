package com.prj4.reviewer.request;

public class ReviewCompanyRequest {
    private String idReviewer;
    private String idCompany;

    public ReviewCompanyRequest(String idReviewer, String idCompany) {
        this.idReviewer = idReviewer;
        this.idCompany = idCompany;
    }

    public String getIdReviewer() {
        return idReviewer;
    }

    public void setIdReviewer(String idReviewer) {
        this.idReviewer = idReviewer;
    }

    public String getIdCompany() {
        return idCompany;
    }

    public void setIdCompany(String idCompany) {
        this.idCompany = idCompany;
    }
}
