package com.prj4.reviewer.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;


@Entity
@Table(name = "COMPANY")// This tells Hibernate to make a table out of this class
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

	@Column(name = "EMAIL_COMPANY")
	private String emailCompany;

	public Company() {}

	public Company(String idCompany, String nameCompany, String addrCompany,
				   String webCompany, String zipCompany, String telCompany,
				   Date dtCreated, String idAccount, String imgAvatarCompany,
				   String imgPanelCompany, String emailCompany) {
		this.idCompany = idCompany;
		this.nameCompany = nameCompany;
		this.addrCompany = addrCompany;
		this.webCompany = webCompany;
		this.zipCompany = zipCompany;
		this.telCompany = telCompany;
		this.dtCreated = dtCreated;
		this.idAccount = idAccount;
		this.imgAvatarCompany = imgAvatarCompany;
		this.imgPanelCompany = imgPanelCompany;
		this.emailCompany = emailCompany;
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

	public String getAddrCompany() {
		return addrCompany;
	}

	public void setAddrCompany(String addrCompany) {
		this.addrCompany = addrCompany;
	}

	public String getWebCompany() {
		return webCompany;
	}

	public void setWebCompany(String webCompany) {
		this.webCompany = webCompany;
	}

	public String getZipCompany() {
		return zipCompany;
	}

	public void setZipCompany(String zipCompany) {
		this.zipCompany = zipCompany;
	}

	public String getTelCompany() {
		return telCompany;
	}

	public void setTelCompany(String telCompany) {
		this.telCompany = telCompany;
	}

	public Date getDtCreated() {
		return dtCreated;
	}

	public void setDtCreated(Date dtCreated) {
		this.dtCreated = dtCreated;
	}

	public String getIdAccount() {
		return idAccount;
	}

	public void setIdAccount(String idAccount) {
		this.idAccount = idAccount;
	}

	public String getImgAvatarCompany() {
		return imgAvatarCompany;
	}

	public void setImgAvatarCompany(String imgAvatarCompany) {
		this.imgAvatarCompany = imgAvatarCompany;
	}

	public String getImgPanelCompany() {
		return imgPanelCompany;
	}

	public void setImgPanelCompany(String imgPanelCompany) {
		this.imgPanelCompany = imgPanelCompany;
	}

	public String getEmailCompany() {
		return emailCompany;
	}

	public void setEmailCompany(String emailCompany) {
		this.emailCompany = emailCompany;
	}
}
