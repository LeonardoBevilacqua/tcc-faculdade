package com.auth.service;

import com.auth.entity.Vaga;
import com.auth.repository.VagaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class VagaService {

    @Autowired
    private VagaRepository vagaRepository;

    public List<Vaga> getVagas() {
        return vagaRepository.findAll();
    }

    public Vaga getVaga(Long id) throws Exception {
        Optional<Vaga> optId = vagaRepository.findById(id);
        if (optId.isEmpty()) {
            throw new Exception();
        }
        return optId.get();
    }

    public Vaga updateSaveVaga(Vaga vaga) throws Exception {
        return vagaRepository.save(vaga);
    }

    public String deleteVaga(Long id) {
        vagaRepository.deleteById(id);
        return "Deleted";
    }

    public List<Vaga> findByTags(String tag) {
        System.out.println("TAG =>" + tag);
        List<Vaga> tags = vagaRepository.findByTagsContaining(Arrays.asList(tag));
        System.out.println("VAGAS => " + tags);
        return tags;
    }
}
