package com.examly.springapp.controller;

import java.util.List;
import com.examly.springapp.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.*;



import com.examly.springapp.crypto.Hash;
import com.examly.springapp.entity.Login;
import com.examly.springapp.entity.Users;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.repo.LoginRepo;
import com.examly.springapp.repo.UserRepo;

@RestController
@CrossOrigin
public class LoginController {

	@Autowired
	LoginRepo loginRepo;

	@Autowired
	UserRepo userRepo;

	@PostMapping("/login")
	
	public ResponseEntity<AuthRes> checkUser2(@RequestBody LoginModel data) {

		Hash h = new Hash();

		List<Login> l = loginRepo.findByEmail(data.getEmail());

		if (l.size() == 0)
		return new ResponseEntity(new AuthRes("false"),HttpStatus.OK);

		if (h.decrypt(l.get(0).getPassword()).equals(data.getPassword())) {
			Users user = userRepo.findByEmail(data.getEmail()).get(0);
			user.setActive(1);
			userRepo.save(user);
			return new ResponseEntity(new AuthRes("true"),HttpStatus.OK);
		}

		return new ResponseEntity(new AuthRes("false"),HttpStatus.OK);
	}



	@GetMapping("/all")
	public Iterable<Login> getAll() {
		return loginRepo.findAll();
	}

	@DeleteMapping("/logout")
	public void logout(@RequestBody String email) {
		

		Users user = userRepo.findByEmail(email).get(0);
		user.setActive(0);
		userRepo.save(user);

	}

}
