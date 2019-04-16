package com.prj4.reviewer.request;

public class FollowCompanyRequest {

    private final String idReviewer;

    private final String idCompany;

    private final Boolean isFollow;

    private final Boolean isActive;

    public FollowCompanyRequest(String idReviewer, String idCompany, Boolean isFollow, Boolean isActive) {
        this.idReviewer = idReviewer;
        this.idCompany = idCompany;
        this.isFollow = isFollow;
        this.isActive = isActive;
    }
}
