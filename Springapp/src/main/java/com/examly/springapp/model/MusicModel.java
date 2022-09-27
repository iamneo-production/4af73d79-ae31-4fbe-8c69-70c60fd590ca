package com.examly.springapp.model;

public class MusicModel {

	private String musicId;
	private String musicName;
	private String musicUrl;
	private String musicPosterUrl;
	private String musicAlbum;
	private String musicArtist;

	private LikeModel like;

	public String getMusicId() {
		return musicId;
	}

	public void setMusicId(String musicId) {
		this.musicId = musicId;
	}

	public String getMusicName() {
		return musicName;
	}

	public void setMusicName(String musicName) {
		this.musicName = musicName;
	}

	public String getMusicUrl() {
		return musicUrl;
	}

	public void setMusicUrl(String musicUrl) {
		this.musicUrl = musicUrl;
	}

	public String getMusicPosterUrl() {
		return musicPosterUrl;
	}

	public void setMusicPosterUrl(String musicPosterUrl) {
		this.musicPosterUrl = musicPosterUrl;
	}

	public String getMusicAlbum() {
		return musicAlbum;
	}

	public void setMusicAlbum(String musicAlbum) {
		this.musicAlbum = musicAlbum;
	}

	public String getMusicArtist() {
		return musicArtist;
	}

	public void setMusicArtist(String musicArtist) {
		this.musicArtist = musicArtist;
	}

	public LikeModel getLike() {
		return like;
	}

	public void setLike(LikeModel like) {
		this.like = like;
	}

}
