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

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

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

    @Column(name = "TYPE_REVIEWER")
    private int typeReviewer;

    public Reviewer() {}

    public Reviewer(String idReviewer, String fullName, String email, Date dateOfBirth, Date dateCreated,
                    String idAccount, String imgAvatar, String imgPanel, int gender, String firstName, String lastName, int typeReviewer) {
        this.idReviewer = idReviewer;
        this.fullName = fullName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.dateCreated = dateCreated;
        this.idAccount = idAccount;
        this.imgAvatar = imgAvatar;
        this.imgPanel = imgPanel;
        this.gender = gender;
        this.typeReviewer = typeReviewer;
    }

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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getTypeReviewer() {
        return typeReviewer;
    }

    public void setTypeReviewer(int typeReviewer) {
        this.typeReviewer = typeReviewer;
    }
}

