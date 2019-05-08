package com.prj4.reviewer.response;

import java.io.Serializable;

public class TopRatingResponse implements Serializable {
    private String nameProduct;
    private int numberRating;
    private String idProduct;

    public TopRatingResponse(){}

    public TopRatingResponse(String nameProduct, int numberRating, String idProduct) {
        this.nameProduct = nameProduct;
        this.numberRating = numberRating;
        this.idProduct = idProduct;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public int getNumberRating() {
        return numberRating;
    }

    public void setNumberRating(int numberRating) {
        this.numberRating = numberRating;
    }

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
    }
}
