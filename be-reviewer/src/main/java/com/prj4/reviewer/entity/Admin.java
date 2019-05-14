package com.prj4.reviewer.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ADMINISTRATOR")// This tells Hibernate to make a table out of this class
public class Admin {

	@Id
	@Column(name = "ID_ADMIN")
    private String idAdmin;

	@Column(name = "NAME_ADMIN")
    private String fullNameAdmin;

	@Column(name = "EMAIL_ADMIN")
    private String emailAdmin;

	@Column(name = "PASS_ADMIN")
    private String passAdmin;

	@Column(name = "DOB_ADMIN")
	private Date dobAdmin;

	@Column(name = "DT_CREATED")
    private Date dtCreated;

	@Column(name = "ISACTIVE")
	private boolean isActive;

	@Column(name = "ADDRESS")
	private String addressAdmin;

	@Column(name = "PHONE")
	private String phoneAdmin;

	@Column(name = "ROLE_ADMIN")
	private String roleAdmin;

	public Admin() {
	}

	public Admin(String idAdmin, String fullNameAdmin, String emailAdmin, String passAdmin,
				 Date dobAdmin, Date dtCreated, boolean isActive, String addressAdmin,
				 String phoneAdmin, String roleAdmin) {
		this.idAdmin = idAdmin;
		this.fullNameAdmin = fullNameAdmin;
		this.emailAdmin = emailAdmin;
		this.passAdmin = passAdmin;
		this.dobAdmin = dobAdmin;
		this.dtCreated = dtCreated;
		this.isActive = isActive;
		this.addressAdmin = addressAdmin;
		this.phoneAdmin = phoneAdmin;
		this.roleAdmin = roleAdmin;
	}

	public String getAddressAdmin() {
		return addressAdmin;
	}

	public void setAddressAdmin(String addressAdmin) {
		this.addressAdmin = addressAdmin;
	}

	public String getPhoneAdmin() {
		return phoneAdmin;
	}

	public void setPhoneAdmin(String phoneAdmin) {
		this.phoneAdmin = phoneAdmin;
	}

	public String getIdAdmin() {
		return idAdmin;
	}

	public String getFullNameAdmin() {
		return fullNameAdmin;
	}

	public String getEmailAdmin() {
		return emailAdmin;
	}

	public String getPassAdmin() {
		return passAdmin;
	}

	public Date getDobAdmin() {
		return dobAdmin;
	}

	public Date getDtCreated() {
		return dtCreated;
	}

	public void setIdAdmin(String idAdmin) {
		this.idAdmin = idAdmin;
	}

	public void setFullNameAdmin(String fullNameAdmin) {
		this.fullNameAdmin = fullNameAdmin;
	}

	public void setEmailAdmin(String emailAdmin) {
		this.emailAdmin = emailAdmin;
	}

	public void setPassAdmin(String passAdmin) {
		this.passAdmin = passAdmin;
	}

	public void setDobAdmin(Date dobAdmin) {
		this.dobAdmin = dobAdmin;
	}

	public void setDtCreated(Date dtCreated) {
		this.dtCreated = dtCreated;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean active) {
		isActive = active;
	}

	public String getRoleAdmin() {
		return roleAdmin;
	}

	public void setRoleAdmin(String roleAdmin) {
		this.roleAdmin = roleAdmin;
	}
}
