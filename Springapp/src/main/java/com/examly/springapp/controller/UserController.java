package com.examly.springapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.entity.Users;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repo.LoginRepo;
import com.examly.springapp.repo.UserRepo;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class UserController {

	@Autowired
	UserRepo userRepo;

	@Autowired
	LoginRepo loginRepo;

	@GetMapping
	List<UserModel> getUser() {

		Iterable<Users> us = userRepo.findAll();

		List<UserModel> list = new ArrayList<>();

		for (Users u : us) {
			UserModel um = new UserModel();
			um.setActive(u.getActive());
			um.setEmail(u.getEmail());
			um.setMobileNumber(u.getMobileNumber());
			um.setRole("user");
			um.setUsername(u.getUsername());
			um.setPassword(loginRepo.findByEmail(u.getEmail()).get(0).getPassword());

			list.add(um);
		}

		return list;

	}

	List<UserModel> getOnlineUser() {

		return null;

	}

//	@
	UserModel userEditData(String id) {
		
		List<Users> li=userRepo.findByEmail(id);
		
		if(li.size()==0)return null;
		
		Users user=li.get(0);
		
		UserModel um=new UserModel();
		
		um.setActive(user.getActive());
		um.setEmail(user.getEmail());
		um.setMobileNumber(user.getMobileNumber());
		um.setRole("user");
		um.setUsername(user.getUsername());
		
		
		
		

		return um;
	}

	void userEditSave(UserModel data) {

	}

	void userDelete(String id) {

	}

}