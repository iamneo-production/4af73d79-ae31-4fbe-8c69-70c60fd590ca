package com.examly.springapp;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

import com.examly.springapp.entity.Users;
import com.examly.springapp.repo.UserRepo;

import com.examly.springapp.repo.UserRepo;

@SpringBootTest
class SpringappApplicationTests {

	@Autowired
	ApplicationContext ctx;

	@Test
	void contextLoads() {

		UserRepo ur = ctx.getBean(UserRepo.class);

		Users u = new Users();
		u.setActive(1);
		u.setEmail("vams");
		u.setMobileNumber("1");
		u.setRole("user");
		u.setUsername("vam");

		ur.save(u);

		System.out.println("inserted");

	}

}
