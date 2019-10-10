package com.core.respository;

import com.core.model.Score;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScoreRepository extends JpaRepository<Score, Long> {

    List<Score> findByJobIdOrderByValueDesc(Long id);
}
