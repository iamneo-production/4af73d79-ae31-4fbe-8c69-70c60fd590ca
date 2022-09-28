package com.examly.springapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.entity.Login;
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
		int sno = 1;
		for (Users u : us) {
			UserModel um = new UserModel();
			um.setActive(u.getActive());
			um.setEmail(u.getEmail());
			um.setMobileNumber(u.getMobileNumber());
			um.setRole("user");
			um.setUsername(u.getUsername());
			um.setPassword(loginRepo.findByEmail(u.getEmail()).get(0).getPassword());
			um.setUserid(sno++);
			list.add(um);
		}

		return list;

	}

	@GetMapping("/online")
	List<UserModel> getOnlineUser() {

		List<UserModel> list = new ArrayList<>();

		int sno = 1;
		for (Users u : userRepo.getOnline()) {
			UserModel um = new UserModel();
			um.setActive(u.getActive());
			um.setEmail(u.getEmail());
			um.setMobileNumber(u.getMobileNumber());
			um.setRole("user");
			um.setUsername(u.getUsername());
			um.setUserid(sno++);
			System.out.println(sno);

			list.add(um);
		}

		return list;

	}

	@GetMapping("/userEdit/{id}")
	UserModel userEditData(@PathVariable String id) {

		List<UserModel> list = new ArrayList<>();

		List<Users> li = userRepo.findByEmail(id);

		if (li.size() == 0)
			return null;

		Users user = li.get(0);

		UserModel um = new UserModel();

		um.setActive(user.getActive());
		um.setEmail(user.getEmail());
		um.setMobileNumber(user.getMobileNumber());
		um.setRole("user");
		um.setUsername(user.getUsername());

		return um;
	}

	@PutMapping("/userEdit")
	String userEditSave(@RequestBody UserModel data) {

		Users u = data.convertUserModel(data);

//		System.out.println(u);
		userRepo.save(u);

		return u.toString();

	}

	@DeleteMapping("/delete/{userid}")
	void userDelete(@PathVariable int userid) {
		

		Users user = userRepo.findById(userid).get(0);
		userRepo.delete(user);
		Login login = loginRepo.findByEmail(user.getEmail()).get(0);
		loginRepo.delete(login);

	}

}
