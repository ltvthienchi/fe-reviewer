package com.prj4.reviewer.entity;

import java.sql.Date;
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
}
