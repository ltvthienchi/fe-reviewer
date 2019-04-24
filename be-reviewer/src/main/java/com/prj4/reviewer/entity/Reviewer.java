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

    public String getIdReviewer() {
        return idReviewer;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public String getIdAccount() {
        return idAccount;
    }

    public String getImgAvatar() {
        return imgAvatar;
    }

    public String getImgPanel() {
        return imgPanel;
    }

    public int getGender() {
        return gender;
    }

    public void setIdReviewer(String idReviewer) {
        this.idReviewer = idReviewer;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public void setIdAccount(String idAccount) {
        this.idAccount = idAccount;
    }

    public void setImgAvatar(String imgAvatar) {
        this.imgAvatar = imgAvatar;
    }

    public void setImgPanel(String imgPanel) {
        this.imgPanel = imgPanel;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }
}
