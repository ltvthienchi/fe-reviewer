package com.prj4.reviewer.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Specifications {
    @Id
    private String idSpec;
    private String nameSpec;
    private String iconSpec;

    public Specifications(String idSpec, String nameSpec, String iconSpec) {
        this.idSpec = idSpec;
        this.nameSpec = nameSpec;
        this.iconSpec = iconSpec;
    }
}

