package com.prj4.reviewer.entity;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="COMPANY")// This tells Hibernate to make a table out of this class
public class Company {

	@Id
	@Column(name = "ID_COMPANY")
    private String idCompany;

	@Column(name = "NAME_COMPANY")
    private String nameCompany;

	@Column(name = "ADDR_COMPANY")
    private String addrCompany;

	@Column(name = "WEB_COMPANY")
    private String webCompany;

	@Column(name = "ZIP_COMPANY")
    private String zipCompany;

	@Column(name = "TEL_COMPANY")
    private String telCompany;

	@Column(name = "DT_CREATED")
    private Date dtCreated;

	@Column(name = "ID_ACCOUNT")
    private String idAccount;

	@Column(name = "IMAGE_AVA")
	private String imgAvatarCompany;

	@Column(name = "IMAGE_PANEL")
	private String imgPanelCompany;








}
