package com.prj4.reviewer.response;

import java.io.Serializable;

public class SearchResponse implements Serializable {

    private String imgProduct;
    private String nameProduct;
    private String idProduct;

    public SearchResponse(String idProduct, String imgProduct, String nameProduct) {
        this.imgProduct = imgProduct;
        this.nameProduct = nameProduct;
        this.idProduct = idProduct;
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

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
    }
}
