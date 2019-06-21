package com.auth.resource;

import com.auth.entity.Usuario;
import com.auth.entity.Vaga;
import com.auth.service.VagaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vagas")
public class VagaResource {

    @Autowired
    private VagaService vagaService;

    @GetMapping
    public ResponseEntity<List<Vaga>> getVagas() {
        return ResponseEntity.ok(vagaService.getVagas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vaga> getVaga(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(vagaService.getVaga(id));
    }

    @PostMapping
    public ResponseEntity<?> saveVaga(@RequestBody Vaga vaga) throws Exception {
        return ResponseEntity.ok(vagaService.updateSaveVaga(vaga));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateVaga(@RequestBody Vaga vaga, @PathVariable Long id) throws Exception {
        return ResponseEntity.ok(vagaService.updateSaveVaga(vaga));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVaga(@PathVariable Long id) {
        return ResponseEntity.ok(vagaService.deleteVaga(id));
    }

    @GetMapping("/tags/{tag}")
    public ResponseEntity<?> getVagasByTags(@PathVariable String tag) {
        return ResponseEntity.ok(vagaService.findByTags(tag));
    }
}
