package com.prj4.reviewer.request;

public class FeedbackAdminRequest {

    private String email;

    private String contentFeedback;

    private String titleFeedback;

    private String role;

    public FeedbackAdminRequest(String email, String contentFeedback, String titleFeedback, String role) {
        this.email = email;
        this.contentFeedback = contentFeedback;
        this.titleFeedback = titleFeedback;
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getContentFeedback() {
        return contentFeedback;
    }

    public String getTitleFeedback() {
        return titleFeedback;
    }

    public void setTitleFeedback(String titleFeedback) {
        this.titleFeedback = titleFeedback;
    }

    public void setContentFeedback(String contentFeedback) {
        this.contentFeedback = contentFeedback;
    }


}
