package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.crypto.Hash;
import com.examly.springapp.entity.Login;
import com.examly.springapp.entity.Users;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repo.LoginRepo;
import com.examly.springapp.repo.UserRepo;

@RestController
@CrossOrigin
public class SignupController {

	@Autowired
	UserRepo userRepo;

	@Autowired
	LoginRepo loginRepo;

	@PostMapping("/signup")
	boolean saveUser(@RequestBody UserModel user) {
		Hash h = new Hash();
		Login l = new Login();
		l.setPassword(h.encrypt(user.getPassword()));

		Users u = new Users();
		l.setEmail(user.getEmail());
		u.setEmail(user.getEmail());
		u.setMobileNumber(user.getMobileNumber());
		u.setRole(user.getRole());
		u.setUsername(user.getUsername());

		if (userRepo.findByEmail(user.getEmail()).size() > 0)
			return false;

		Users add = userRepo.save(u);
		loginRepo.save(l);
		return add != null;

	}

}
