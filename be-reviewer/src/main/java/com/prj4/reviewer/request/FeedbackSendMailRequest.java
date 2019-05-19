package com.prj4.reviewer.request;

public class FeedbackSendMailRequest {

    private String email;
    private String content;
    private String idFeedback;

    public FeedbackSendMailRequest(String email, String content, String idFeedback) {
        this.email = email;
        this.content = content;
        this.idFeedback = idFeedback;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getIdFeedback() {
        return idFeedback;
    }

    public void setIdFeedback(String idFeedback) {
        this.idFeedback = idFeedback;
    }
}
