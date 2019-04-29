package com.prj4.reviewer.request;

public class UseRequest {

    private String userName;
    private String passAccount;
    private int typeAccount;
    private String nameAccount;
    private boolean isActive;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassAccount() {
        return passAccount;
    }

    public void setPassAccount(String passAccount) {
        this.passAccount = passAccount;
    }

    public int getTypeAccount() {
        return typeAccount;
    }

    public void setTypeAccount(int typeAccount) {
        this.typeAccount = typeAccount;
    }

    public String getNameAccount() {
        return nameAccount;
    }

    public void setNameAccount(String nameAccount) {
        this.nameAccount = nameAccount;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
