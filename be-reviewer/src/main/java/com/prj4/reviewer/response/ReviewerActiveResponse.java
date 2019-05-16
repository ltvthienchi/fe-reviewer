package com.prj4.reviewer.response;

import java.io.Serializable;
import java.util.Date;

public class ReviewerActiveResponse implements Serializable {

    private String idReviewer;
    private String fullName;
    private String firstName;
    private String lastName;
    private String email;
    private Date dateOfBirth;
    private Date dateCreated;
    private int gender;
    private String idAccount;
    private boolean isActive;

    public ReviewerActiveResponse() {
    }

    public ReviewerActiveResponse(String idReviewer, String fullName, String firstName, String lastName, String email,
                                  Date dateOfBirth, Date dateCreated,
                                  int gender, String idAccount, boolean isActive) {
        this.idReviewer = idReviewer;
        this.fullName = fullName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.dateCreated = dateCreated;
        this.gender = gender;
        this.idAccount = idAccount;
        this.isActive = isActive;
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

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public String getIdAccount() {
        return idAccount;
    }

    public void setIdAccount(String idAccount) {
        this.idAccount = idAccount;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
