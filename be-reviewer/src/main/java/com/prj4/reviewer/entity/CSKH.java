package com.prj4.reviewer.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class CSKH {

	@Id
    private String idCSKH;
	
	private String idCompany;
	
    private String content;
    
    private Date dateCreate;
    
    private Date dateUpdate;

	public String getIdCSKH() {
		return idCSKH;
	}

	public void setIdCSKH(String idCSKH) {
		this.idCSKH = idCSKH;
	}

	public String getIdCompany() {
		return idCompany;
	}

	public void setIdCompany(String idCompany) {
		this.idCompany = idCompany;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getDateCreate() {
		return dateCreate;
	}

	public void setDateCreate(Date dateCreate) {
		this.dateCreate = dateCreate;
	}

	public Date getDateUpdate() {
		return dateUpdate;
	}

	public void setDateUpdate(Date dateUpdate) {
		this.dateUpdate = dateUpdate;
	}

	
    
}
