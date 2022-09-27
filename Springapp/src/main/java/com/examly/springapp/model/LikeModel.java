package com.examly.springapp.model;

import java.util.List;

public class LikeModel {
	
	
	private String id;
	private int noOfLike;
	private List<UserModel> likedUser;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getNoOfLike() {
		return noOfLike;
	}
	public void setNoOfLike(int noOfLike) {
		this.noOfLike = noOfLike;
	}
	public List<UserModel> getLikedUser() {
		return likedUser;
	}
	public void setLikedUser(List<UserModel> likedUser) {
		this.likedUser = likedUser;
	}
	
	

}
