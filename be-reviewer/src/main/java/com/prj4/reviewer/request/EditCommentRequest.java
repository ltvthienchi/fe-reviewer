package com.prj4.reviewer.request;

public class EditCommentRequest {
    private String idComment;
    private String contentComment;

    public EditCommentRequest(String idComment, String contentComment) {
        this.idComment = idComment;
        this.contentComment = contentComment;
    }

    public String getIdComment() {
        return idComment;
    }

    public void setIdComment(String idComment) {
        this.idComment = idComment;
    }

    public String getContentComment() {
        return contentComment;
    }

    public void setContentComment(String contentComment) {
        this.contentComment = contentComment;
    }
}
