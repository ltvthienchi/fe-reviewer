package com.prj4.reviewer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;


@Entity
@Table(name = "POST_PRODUCT")
public class Post {

    @Id
    @Column(name = "ID_POST_PRODUCT")
    private String idPostProduct;

    @Column(name = "ID_PRODUCT")
    private String idProduct;

    @Column(name = "ID_COMPANY")
    private String idCompany;

    @Column(name = "CONTENT_POST")
    private String contentPost;

    @Column(name = "DT_CREATED")
    private Date dtCreated;

    @Column(name = "ID_IMAGE")
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
