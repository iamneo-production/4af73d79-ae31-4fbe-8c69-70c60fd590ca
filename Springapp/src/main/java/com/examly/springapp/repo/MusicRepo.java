package com.examly.springapp.repo;

import org.springframework.data.repository.CrudRepository;

import com.examly.springapp.entity.Music;
import com.examly.springapp.model.MusicModel;

public interface MusicRepo extends CrudRepository<Music, String> {

	MusicModel save(MusicModel music);
}
