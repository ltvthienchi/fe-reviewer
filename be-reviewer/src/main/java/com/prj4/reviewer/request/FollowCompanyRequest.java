package com.prj4.reviewer.request;

public class FollowCompanyRequest {

    private final String idFollower;

    private final String idCompany;

    private final boolean isFollow;

    public FollowCompanyRequest(String idFollower, String idCompany, boolean isFollow) {
        this.idFollower = idFollower;
        this.idCompany = idCompany;
        this.isFollow = isFollow;
    }

    public String getIdFollower() {
        return idFollower;
    }

    public String getIdCompany() {
        return idCompany;
    }

    public boolean isFollow() {
        return isFollow;
    }
}
