package com.prj4.reviewer.response;
import java.io.Serializable;
import java.util.Comparator;
import java.util.Date;

public class PostResponse implements Serializable, Comparable {
    private String idPostProduct;
    private String idProduct;
    private String idCompany;
    private String nameCompany;
    private String content;
    private String avatarCompany;
    private String imgPost;
    private float avgDisplay;
    private float avgPerformance;
    private float avgCamera;
    private float avgBattery;
    private float avgDesign;
    private int totalComment;
    private String infoBattery;
    private String infoDisplay;
    private String infoPerformance;
    private String infoDesign;
    private String infoCamera;
    private Date dtCreated;
    private String productName;
    private Boolean isActive;

    public PostResponse() {}

    public PostResponse(String idPostProduct, String idProduct, String idCompany, String nameCompany, String content, String avatarCompany, String imgPost, float avgDisplay, float avgPerformance, float avgCamera, float avgBattery, float avgDesign, int totalComment, String infoBattery, String infoDisplay, String infoPerformance, String infoDesign, String infoCamera, Date dtCreated, String productName, Boolean isActive) {
        this.idPostProduct = idPostProduct;
        this.idProduct = idProduct;
        this.idCompany = idCompany;
        this.nameCompany = nameCompany;
        this.content = content;
        this.avatarCompany = avatarCompany;
        this.imgPost = imgPost;
        this.avgDisplay = avgDisplay;
        this.avgPerformance = avgPerformance;
        this.avgCamera = avgCamera;
        this.avgBattery = avgBattery;
        this.avgDesign = avgDesign;
        this.totalComment = totalComment;
        this.infoBattery = infoBattery;
        this.infoDisplay = infoDisplay;
        this.infoPerformance = infoPerformance;
        this.infoDesign = infoDesign;
        this.infoCamera = infoCamera;
        this.dtCreated = dtCreated;
        this.productName = productName;
        this.isActive = isActive;
    }

    public String getIdPostProduct() {
        return idPostProduct;
    }

    public void setIdPostProduct(String idPostProduct) {
        this.idPostProduct = idPostProduct;
    }

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
    }

    public String getIdCompany() {
        return idCompany;
    }

    public void setIdCompany(String idCompany) {
        this.idCompany = idCompany;
    }

    public String getNameCompany() {
        return nameCompany;
    }

    public void setNameCompany(String nameCompany) {
        this.nameCompany = nameCompany;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAvatarCompany() {
        return avatarCompany;
    }

    public void setAvatarCompany(String avatarCompany) {
        this.avatarCompany = avatarCompany;
    }

    public String getImgPost() {
        return imgPost;
    }

    public void setImgPost(String imgPost) {
        this.imgPost = imgPost;
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

    public float getAvgCamera() {
        return avgCamera;
    }

    public void setAvgCamera(float avgCamera) {
        this.avgCamera = avgCamera;
    }

    public float getAvgBattery() {
        return avgBattery;
    }

    public void setAvgBattery(float avgBattery) {
        this.avgBattery = avgBattery;
    }

    public float getAvgDesign() {
        return avgDesign;
    }

    public void setAvgDesign(float avgDesign) {
        this.avgDesign = avgDesign;
    }

    public int getTotalComment() {
        return totalComment;
    }

    public void setTotalComment(int totalComment) {
        this.totalComment = totalComment;
    }

    public String getInfoBattery() {
        return infoBattery;
    }

    public void setInfoBattery(String infoBattery) {
        this.infoBattery = infoBattery;
    }

    public String getInfoDisplay() {
        return infoDisplay;
    }

    public void setInfoDisplay(String infoDisplay) {
        this.infoDisplay = infoDisplay;
    }

    public String getInfoPerformance() {
        return infoPerformance;
    }

    public void setInfoPerformance(String infoPerformance) {
        this.infoPerformance = infoPerformance;
    }

    public String getInfoDesign() {
        return infoDesign;
    }

    public void setInfoDesign(String infoDesign) {
        this.infoDesign = infoDesign;
    }

    public String getInfoCamera() {
        return infoCamera;
    }

    public void setInfoCamera(String infoCamera) {
        this.infoCamera = infoCamera;
    }

    public Date getDtCreated() {
        return dtCreated;
    }

    public void setDtCreated(Date dtCreated) {
        this.dtCreated = dtCreated;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }


    @Override
    public int compareTo(Object o) {
        PostResponse postResponse = (PostResponse)o;
        if (this.getDtCreated().after(postResponse.getDtCreated()))
            return 1;
        return -1;
    }
}
