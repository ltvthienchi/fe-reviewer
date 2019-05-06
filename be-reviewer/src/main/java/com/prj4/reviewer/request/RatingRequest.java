package com.prj4.reviewer.request;

import java.util.Date;

public class RatingRequest {
    private String idProduct;
    private String idReviewer;
    private Date dtCreated;
    private float rtBattery;
    private float rtDisplay;
    private float rtPerformance;
    private float rtDesign;
    private float rtCamera;

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
    }

    public String getIdReviewer() {
        return idReviewer;
    }

    public void setIdReviewer(String idReviewer) {
        this.idReviewer = idReviewer;
    }

    public Date getDtCreated() {
        return dtCreated;
    }

    public void setDtCreated(Date dtCreated) {
        this.dtCreated = dtCreated;
    }

    public float getRtBattery() {
        return rtBattery;
    }

    public void setRtBattery(float rtBattery) {
        this.rtBattery = rtBattery;
    }

    public float getRtDisplay() {
        return rtDisplay;
    }

    public void setRtDisplay(float rtDisplay) {
        this.rtDisplay = rtDisplay;
    }

    public float getRtPerformance() {
        return rtPerformance;
    }

    public void setRtPerformance(float rtPerformance) {
        this.rtPerformance = rtPerformance;
    }

    public float getRtDesign() {
        return rtDesign;
    }

    public void setRtDesign(float rtDesign) {
        this.rtDesign = rtDesign;
    }

    public float getRtCamera() {
        return rtCamera;
    }

    public void setRtCamera(float rtCamera) {
        this.rtCamera = rtCamera;
    }
}
