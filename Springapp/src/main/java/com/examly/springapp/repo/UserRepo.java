package com.examly.springapp.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.examly.springapp.entity.Users;

public interface UserRepo extends CrudRepository<Users, Integer> {

	Users save(Users user);

	List<Users> findByEmail(String email);

}
