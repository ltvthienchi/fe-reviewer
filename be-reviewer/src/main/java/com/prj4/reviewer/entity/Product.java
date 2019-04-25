package com.prj4.reviewer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PRODUCT")
public class Product {
    @Id
    @Column(name = "ID_PRODUCT")
    private String idProduct;

    @Column(name = "NAME_PRODUCT")
    private String nameProduct;

    @Column(name = "TAG_PRODUCT")
    private String tagProduct;

    @Column(name = "DT_CREATED")
    private String dtCreated;

    @Column(name = "AVG_BATTERY")
    private String avgBattery;

    @Column(name = "AVG_DISPLAY")
    private String avgDisplay;

    @Column(name = "AVG_PERFORMANCE")
    private String avgPerformance;

    @Column(name = "AVG_DESIGN")
    private String avgDesign;

    @Column(name = "AVG_CAMERA")
    private String avgCamera;

    @Column(name = "NUMB_RATINNG")
    private String numRating;

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

    public String getDtCreated() {
        return dtCreated;
    }

    public void setDtCreated(String dtCreated) {
        this.dtCreated = dtCreated;
    }

    public String getAvgBattery() {
        return avgBattery;
    }

    public void setAvgBattery(String avgBattery) {
        this.avgBattery = avgBattery;
    }

    public String getAvgDisplay() {
        return avgDisplay;
    }

    public void setAvgDisplay(String avgDisplay) {
        this.avgDisplay = avgDisplay;
    }

    public String getAvgPerformance() {
        return avgPerformance;
    }

    public void setAvgPerformance(String avgPerformance) {
        this.avgPerformance = avgPerformance;
    }

    public String getAvgDesign() {
        return avgDesign;
    }

    public void setAvgDesign(String avgDesign) {
        this.avgDesign = avgDesign;
    }

    public String getAvgCamera() {
        return avgCamera;
    }

    public void setAvgCamera(String avgCamera) {
        this.avgCamera = avgCamera;
    }

    public String getNumRating() {
        return numRating;
    }

    public void setNumRating(String numRating) {
        this.numRating = numRating;
    }
}
