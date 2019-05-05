package com.prj4.reviewer.request;

import java.util.Date;

public class ReviewerRequest {
    private String email;
    private String firstName;
    private String lastName;
    private String NewPassword;
    private int gender;
    private String dobReviewer;


    public String getNewPassword() {
        return NewPassword;
    }


    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public int getGender() {
        return gender;
    }


    public String getDobReviewer() {
        return dobReviewer;
    }

    public String getEmail() {
        return email;
    }
}
