package com.examly.springapp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;

import com.examly.springapp.entity.Users;

public interface UserRepo extends CrudRepository<Users, Integer> {

	Users save(Users user);

	List<Users> findByEmail(String email);

	List<Users> findById(int id);

	@Query(value = "select * from users u where u.active=1", nativeQuery = true)
	List<Users> getOnline();

}
