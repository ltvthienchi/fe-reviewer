package com.prj4.reviewer.response;

import java.io.Serializable;

public class SearchReponse implements Serializable {

    private String imgProduct;
    private String nameProduct;

    public SearchReponse(String imgProduct, String nameProduct) {
        this.imgProduct = imgProduct;
        this.nameProduct = nameProduct;
    }

    public String getImgProduct() {
        return imgProduct;
    }

    public void setImgProduct(String imgProduct) {
        this.imgProduct = imgProduct;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }
}
