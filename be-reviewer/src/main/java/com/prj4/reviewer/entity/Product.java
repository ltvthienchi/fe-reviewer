package com.prj4.reviewer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

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
    private Date dtCreated;

    @Column(name = "AVG_BATTERY")
    private int avgBattery;

    @Column(name = "AVG_DISPLAY")
    private int avgDisplay;

    @Column(name = "AVG_PERFORMANCE")
    private int avgPerformance;

    @Column(name = "AVG_DESIGN")
    private int avgDesign;

    @Column(name = "AVG_CAMERA")
    private int avgCamera;

    @Column(name = "NUMB_RATINNG")
    private int numRating;

    public Product(String idProduct, String nameProduct, String tagProduct, Date dtCreated, int avgBattery,
                   int avgDisplay, int avgPerformance, int avgDesign, int avgCamera, int numRating) {
        this.idProduct = idProduct;
        this.nameProduct = nameProduct;
        this.tagProduct = tagProduct;
        this.dtCreated = dtCreated;
        this.avgBattery = avgBattery;
        this.avgDisplay = avgDisplay;
        this.avgPerformance = avgPerformance;
        this.avgDesign = avgDesign;
        this.avgCamera = avgCamera;
        this.numRating = numRating;
    }

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

    public int getAvgBattery() {
        return avgBattery;
    }

    public void setAvgBattery(int avgBattery) {
        this.avgBattery = avgBattery;
    }

    public int getAvgDisplay() {
        return avgDisplay;
    }

    public void setAvgDisplay(int avgDisplay) {
        this.avgDisplay = avgDisplay;
    }

    public int getAvgPerformance() {
        return avgPerformance;
    }

    public void setAvgPerformance(int avgPerformance) {
        this.avgPerformance = avgPerformance;
    }

    public int getAvgDesign() {
        return avgDesign;
    }

    public void setAvgDesign(int avgDesign) {
        this.avgDesign = avgDesign;
    }

    public int getAvgCamera() {
        return avgCamera;
    }

    public void setAvgCamera(int avgCamera) {
        this.avgCamera = avgCamera;
    }

    public int getNumRating() {
        return numRating;
    }

    public void setNumRating(int numRating) {
        this.numRating = numRating;
    }
}
