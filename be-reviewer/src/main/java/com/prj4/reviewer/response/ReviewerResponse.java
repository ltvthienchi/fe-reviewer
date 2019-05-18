package com.prj4.reviewer.response;

import java.io.Serializable;
import java.util.Date;

public class ReviewerResponse implements Serializable {

    private String idReviewer;
    private String fullName;
    private String firstName;
    private String lastName;
    private String email;
    private Date dateOfBirth;
    private String imgAvatar;
    private String imgPanel;
    private int gender;
    private int typeAccount;
    private int typeReviewer;

    public ReviewerResponse(String idReviewer, String fullName, String firstName, String lastName, String email,
                            Date dateOfBirth, String imgAvatar, String imgPanel, int gender, int typeReviewer) {
        this.idReviewer = idReviewer;
        this.fullName = fullName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.imgAvatar = imgAvatar;
        this.imgPanel = imgPanel;
        this.gender = gender;
        this.typeReviewer = typeReviewer;
    }

    public String getIdReviewer() {
        return idReviewer;
    }

    public void setIdReviewer(String idReviewer) {
        this.idReviewer = idReviewer;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }


    public String getImgAvatar() {
        return imgAvatar;
    }

    public void setImgAvatar(String imgAvatar) {
        this.imgAvatar = imgAvatar;
    }

    public String getImgPanel() {
        return imgPanel;
    }

    public void setImgPanel(String imgPanel) {
        this.imgPanel = imgPanel;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public int getTypeAccount() {
        return typeAccount;
    }

    public void setTypeAccount(int typeAccount) {
        this.typeAccount = typeAccount;
    }

    public int getTypeReviewer() {
        return typeReviewer;
    }

    public void setTypeReviewer(int typeReviewer) {
        this.typeReviewer = typeReviewer;
    }
}
