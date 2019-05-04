package com.prj4.reviewer.request;

import java.util.Date;

public class PostRequest {
    private String idPostProduct;
    private String idProduct;
    private String idCompany;
    private String contentPost;
    private Date dtCreated;
    private String idImage;

    public String getIdPostProduct() {
        return idPostProduct;
    }

    public void setIdPostProduct(String idPostProduct) {
        this.idPostProduct = idPostProduct;
    }

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
    }

    public String getIdCompany() {
        return idCompany;
    }

    public void setIdCompany(String idCompany) {
        this.idCompany = idCompany;
    }

    public String getContentPost() {
        return contentPost;
    }

    public void setContentPost(String contentPost) {
        this.contentPost = contentPost;
    }

    public Date getDtCreated() {
        return dtCreated;
    }

    public void setDtCreated(Date dtCreated) {
        this.dtCreated = dtCreated;
    }

    public String getIdImage() {
        return idImage;
    }

    public void setIdImage(String idImage) {
        this.idImage = idImage;
    }
}
