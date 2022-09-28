package com.examly.springapp.model;

import com.examly.springapp.entity.Login;

public class LoginModel {

	private String email;
	private String password;

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

	public Login convertLogin(LoginModel loginModel) {

		Login l = new Login();
		l.setEmail(loginModel.getEmail());
		l.setPassword(loginModel.getPassword());

		return l;

	}

	public LoginModel convertLoginModel(Login login) {

		LoginModel ln = new LoginModel();
		ln.setEmail(login.getPassword());
		ln.setEmail(login.getEmail());

		return ln;

	}

}
