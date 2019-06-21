package com.auth.resource;

import com.auth.entity.Usuario;
import com.auth.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioResource {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<Usuario>> getUsuarios() {
        return ResponseEntity.ok(usuarioService.getUsuarios());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUsuario(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(usuarioService.getUsuario(id));
    }

    @PostMapping
    public ResponseEntity<?> saveUsuario(@RequestBody Usuario usuario) throws Exception {
        return ResponseEntity.ok(usuarioService.updateSaveUsuario(usuario));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUsuario(@RequestBody Usuario usuario, @PathVariable Long id) throws Exception {
        return ResponseEntity.ok(usuarioService.updateSaveUsuario(usuario));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUsuario(@PathVariable Long id) {
        return ResponseEntity.ok(usuarioService.deleteUsuario(id));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) throws Exception {
        return ResponseEntity.ok(usuarioService.login(usuario.getNome(), usuario.getPassword()));
    }
}
