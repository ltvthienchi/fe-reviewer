package com.prj4.reviewer.entity;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table (name = "REVIEWER")// This tells Hibernate to make a table out of this class
public class Reviewer {

	@Id
    @Column(name = "ID_REVIEWER")
    private String idReviewer;

    @Column(name = "NAME_REVIEWER")
    private String fullName;

    @Column(name = "EMAIL_REVIEWER")
    private String email;

    @Column(name = "DOB_REVIWER")
    private Date dateOfBirth;

    @Column(name = "DT_CREATED")
    private Date dateCreated;

    @Column(name = "ID_ACCOUNT")
    private String idAccount;


    @Column(name = "IMAGE_AVA")
    private String imgAvatar;


    @Column(name = "IMAGE_PANEL")
    private String imgPanel;


    @Column(name = "GENDER")
    private int gender;


}
