package com.examly.springapp.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.examly.springapp.entity.Login;

public interface LoginRepo extends CrudRepository<Login, String> {

	Login save(Login login);

	List<Login> findByEmail(String email);

//	@Modifying
//	@Query("update users u set u.status = 1 where u.email = ?1")
//	void updateStatus(String email);

//	List<Login> findByEmailAndPassword(String email, String password);

}
