package com.examly.springapp.model;

import org.springframework.beans.factory.annotation.Value;

public class UserModel {

	private String email;

	private String password;
	private String username;
	private String mobileNumber;
	@Value(value = "1")
	private int active;
	@Value(value = "user")
	private String role;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public int getActive() {
		return active;
	}

	public void setActive(int active) {
		this.active = active;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "UserModel [email=" + email + ", password=" + password + ", username=" + username + ", mobileNumber="
				+ mobileNumber + ", active=" + active + ", role=" + role + "]";
	}

}
