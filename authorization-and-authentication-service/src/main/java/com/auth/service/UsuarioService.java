package com.auth.service;

import com.auth.entity.Usuario;
import com.auth.exception.UsuarioNotFoundException;
import com.auth.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> getUsuarios() {
        return usuarioRepository.findAll();
    }

    public Usuario getUsuario(Long id) throws Exception {
        Optional<Usuario> optId = usuarioRepository.findById(id);
        if (optId.isEmpty()) {
            throw new UsuarioNotFoundException("Usuario nao encontrado");
        }
        return optId.get();
    }

    public Usuario updateSaveUsuario(Usuario usuario) throws Exception {
        return usuarioRepository.save(usuario);
    }

    public String deleteUsuario(Long id) {
        usuarioRepository.deleteById(id);
        return "Deleted";
    }

    public Usuario login(String nome, String password) throws UsuarioNotFoundException {
        Usuario usuario= usuarioRepository.findByNomeAndPassword(nome, password);
        if (usuario==null) {
            throw new UsuarioNotFoundException("Usuario nao encontrado");
        }
        return usuario;
    }
}
