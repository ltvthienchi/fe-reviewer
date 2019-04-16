package com.prj4.reviewer.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@Entity
public class Rate {

    @Id
    private String idPost;
    private String scoreRate;
    private String idReviewer;

    // scoreRate save with String JSON
    public Rate(String idPost, String scoreRate, String idReviewer) {
        this.idPost = idPost;
        this.scoreRate = scoreRate;
        this.idReviewer = idReviewer;
    }
}
