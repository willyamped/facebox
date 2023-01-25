package com.willy.facebox.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity //this annotation is to store this object in DB
public class Person {
    @Id //to indicate a primary key for the field below it
    @GeneratedValue(strategy = GenerationType.IDENTITY) //to generate automatically and auto increment
    private int id;
    private String name;
    private String address;

    public Person() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
