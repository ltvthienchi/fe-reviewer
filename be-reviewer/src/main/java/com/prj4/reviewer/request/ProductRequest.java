package com.prj4.reviewer.request;

import java.util.Date;

public class ProductRequest {
    private String idProduct;
    private String nameProduct;
    private String tagProduct;
    private Date dtCreated;
    private float avgBattery;
    private float avgDisplay;
    private float avgPerformance;
    private float avgDesign;
    private float avgCamera;
    private int numRating;

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getTagProduct() {
        return tagProduct;
    }

    public void setTagProduct(String tagProduct) {
        this.tagProduct = tagProduct;
    }

    public Date getDtCreated() {
        return dtCreated;
    }

    public void setDtCreated(Date dtCreated) {
        this.dtCreated = dtCreated;
    }

    public float getAvgBattery() {
        return avgBattery;
    }

    public void setAvgBattery(float avgBattery) {
        this.avgBattery = avgBattery;
    }

    public float getAvgDisplay() {
        return avgDisplay;
    }

    public void setAvgDisplay(float avgDisplay) {
        this.avgDisplay = avgDisplay;
    }

    public float getAvgPerformance() {
        return avgPerformance;
    }

    public void setAvgPerformance(float avgPerformance) {
        this.avgPerformance = avgPerformance;
    }

    public float getAvgDesign() {
        return avgDesign;
    }

    public void setAvgDesign(float avgDesign) {
        this.avgDesign = avgDesign;
    }

    public float getAvgCamera() {
        return avgCamera;
    }

    public void setAvgCamera(float avgCamera) {
        this.avgCamera = avgCamera;
    }

    public int getNumRating() {
        return numRating;
    }

    public void setNumRating(int numRating) {
        this.numRating = numRating;
    }
}
