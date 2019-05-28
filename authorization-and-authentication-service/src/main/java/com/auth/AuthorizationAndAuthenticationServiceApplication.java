package com.auth;

import com.auth.entity.Roles;
import com.auth.entity.Usuario;
import com.auth.entity.Vaga;
import com.auth.service.UsuarioService;
import com.auth.service.VagaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@SpringBootApplication
public class AuthorizationAndAuthenticationServiceApplication implements CommandLineRunner {

	@Autowired
	private VagaService vagaService;

	@Autowired
	private UsuarioService usuarioService;

	public static void main(String[] args) {
		SpringApplication.run(AuthorizationAndAuthenticationServiceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Usuario u1 = new Usuario("Marcio Macedo", "1234", Roles.CANDIDATO);
		Usuario u2 = new Usuario("Marcelo Costa", "4569", Roles.CANDIDATO);
		Usuario u3 = new Usuario("Leonardo Bev", "1558", Roles.CANDIDATO);
		Usuario u4 = new Usuario("Thiago Algo", "151654", Roles.CANDIDATO);
		Vaga v1 = new Vaga("Dev Java", "Vaga para desenvolvedor Java", LocalDate.now(), LocalDate.now());
		Vaga v2 = new Vaga("Dev C#", "Vaga para desenvolvedor C#", LocalDate.now(), LocalDate.now());
		Vaga v3 = new Vaga("Dev Javascript", "Vaga para desenvolvedor Javascript", LocalDate.now(), LocalDate.now());
		Vaga v4 = new Vaga("Dev Python", "Vaga para desenvolvedor Python", LocalDate.now(), LocalDate.now());
		List<String> tags = new ArrayList<>();
		tags.add("Java");
		tags.add("C#");
		v1.setTags(tags);

		vagaService.updateSaveVaga(v1);
		vagaService.updateSaveVaga(v2);
		vagaService.updateSaveVaga(v3);
		vagaService.updateSaveVaga(v4);

		usuarioService.updateSaveUsuario(u1);
		usuarioService.updateSaveUsuario(u2);
		usuarioService.updateSaveUsuario(u3);
		usuarioService.updateSaveUsuario(u4);
	}
}
