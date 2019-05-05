package com.prj4.reviewer.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "IMAGE_PRO")// This tells Hibernate to make a table out of this class
public class Images {

	@Id
	@Column(name = "ID_IMAGE")
    private String idImage;

	@Column(name = "IMAGE_PATH")
	private String imgPath;

	@Column(name = "TYPE_IMG")
	private String typeImg;

	public Images(String idImage, String imgPath, String typeImg) {
		this.idImage = idImage;
		this.imgPath = imgPath;
		this.typeImg = typeImg;
	}

	public String getIdImage() {
		return idImage;
	}

	public void setIdImage(String idImage) {
		this.idImage = idImage;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public String getTypeImg() {
		return typeImg;
	}

	public void setTypeImg(String typeImg) {
		this.typeImg = typeImg;
	}
}
