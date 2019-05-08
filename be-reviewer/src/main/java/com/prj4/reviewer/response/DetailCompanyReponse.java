package com.prj4.reviewer.response;

import com.prj4.reviewer.entity.Company;
import com.prj4.reviewer.entity.Post;

import java.io.Serializable;
import java.util.List;

public class DetailCompanyReponse implements Serializable {
    private CompanyResponse company;
    private List<PostResponse> lstPost;

    public DetailCompanyReponse(CompanyResponse company, List<PostResponse> lstPost) {
        this.company = company;
        this.lstPost = lstPost;
    }

    public CompanyResponse getCompany() {
        return company;
    }

    public void setCompany(CompanyResponse company) {
        this.company = company;
    }

    public List<PostResponse> getLstPost() {
        return lstPost;
    }

    public void setLstPost(List<PostResponse> lstPost) {
        this.lstPost = lstPost;
    }
}
