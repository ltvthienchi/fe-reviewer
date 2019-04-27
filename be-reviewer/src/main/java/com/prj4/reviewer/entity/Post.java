package com.prj4.reviewer.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@Entity
public class Post {

    @Id
    private String idPost;


    private String nameCompany;

    private String tagPost;

    private int typePost; // 1-Post New Product; 2-Ads


    private String lstSpecifications;
    private String contentPost;
    private String imageSource;
    private String scoreSpecifications;

    //private Map<String,SpecificationsRate> listTopRate;

    //private Map<String, SpecificationsRate> specificationsRateList;

    public Post(String idPost, String nameCompany, String tagPost, int typePost,
                String lstSpecifications, String contentPost, String imageSource,String scoreSpecifications) {
        this.idPost = idPost;
        this.nameCompany = nameCompany;
        this.tagPost = tagPost;
        this.typePost = typePost;
        this.lstSpecifications = lstSpecifications;
        this.contentPost = contentPost;
        this.imageSource = imageSource;
        this.scoreSpecifications = scoreSpecifications;
    }

}
