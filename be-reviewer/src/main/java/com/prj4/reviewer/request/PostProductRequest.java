package com.prj4.reviewer.request;

import org.springframework.web.multipart.MultipartFile;

public class PostProductRequest {
    private String emailUser;
    private String nameProduct;
    private String contentPost;
    private MultipartFile imageProduct;

    public PostProductRequest(String emailUser, String nameProduct, String contentPost, MultipartFile imageProduct) {
        this.emailUser = emailUser;
        this.nameProduct = nameProduct;
        this.contentPost = contentPost;
        this.imageProduct = imageProduct;
    }

    public String getEmailUser() {
        return emailUser;
    }

    public void setEmailUser(String emailUser) {
        this.emailUser = emailUser;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getContentPost() {
        return contentPost;
    }

    public void setContentPost(String contentPost) {
        this.contentPost = contentPost;
    }

    public MultipartFile getImageProduct() {
        return imageProduct;
    }

    public void setImageProduct(MultipartFile imageProduct) {
        this.imageProduct = imageProduct;
    }
}
