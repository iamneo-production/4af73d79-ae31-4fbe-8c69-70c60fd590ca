package com.examly.springapp.model;

public class AuthRes {
    private String message;

    public AuthRes(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    
    
}
