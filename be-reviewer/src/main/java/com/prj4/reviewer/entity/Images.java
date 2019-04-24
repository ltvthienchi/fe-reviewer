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
    
}
