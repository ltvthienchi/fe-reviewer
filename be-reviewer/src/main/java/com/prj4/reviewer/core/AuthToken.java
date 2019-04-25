package com.prj4.reviewer.core;

public class AuthToken {

    private String token;
    private int typeRev;
    private String fullName;
    private boolean isActive;

    public AuthToken(){

    }

    public AuthToken(String token, int typeRev, String fullName, boolean isActive){
        this.token = token;
        this.isActive = isActive;
        this.typeRev = typeRev;
        this.fullName = fullName;
    }

    public AuthToken(String token){
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public int getTypeRev() {
        return typeRev;
    }

    public void setTypeRev(int typeRev) {
        this.typeRev = typeRev;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
