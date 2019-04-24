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

}
