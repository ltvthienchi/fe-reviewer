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

	
    
}
