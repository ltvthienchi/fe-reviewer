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
}
