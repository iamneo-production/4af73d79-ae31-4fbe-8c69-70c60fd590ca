package com.examly.springapp.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import com.examly.springapp.crypto.Hash;
import com.examly.springapp.entity.Users;
import com.examly.springapp.repo.LoginRepo;

public class UserModel {

	private String email;

	private String password;
	private String username;
	private String mobileNumber;
	@Value(value = "1")
	private int active;
	@Value(value = "user")
	private String role;
	private int userid;

	public int getUserid() {
		return userid;
	}

	public void setUserid(int i) {
		this.userid = i;
	}

	@Autowired
	private LoginRepo loginRepo;

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

	public Users convertUserModel(UserModel userModel) {

		Users user = new Users();

		user.setActive(userModel.getActive());
		user.setEmail(userModel.getEmail());
		user.setMobileNumber(userModel.getMobileNumber());
		user.setRole(userModel.getRole());
		user.setUsername(userModel.getUsername());

		return user;

	}

	public UserModel convertUser(Users user) {

		UserModel um = new UserModel();
		Hash h = new Hash();

		um.setActive(user.getActive());
		um.setEmail(user.getEmail());
		um.setMobileNumber(user.getMobileNumber());
		um.setRole(user.getRole());
		um.setUsername(user.getUsername());
		um.setPassword(h.decrypt(loginRepo.findByEmail(user.getEmail()).get(0).getPassword()));
		;

		return um;

	}

}
