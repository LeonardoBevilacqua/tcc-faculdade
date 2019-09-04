package com.core.service;

import com.core.exception.EntityNotFoundException;
import com.core.exception.UserUnauthorizedException;
import com.core.model.Role;
import com.core.model.User;
import com.core.respository.UserRepository;
import com.core.security.UserSecurity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUser(Long id) throws RuntimeException {
        UserSecurity user = UserService.authenticated();
        System.out.println("User => "+user);
        if(!user.hasRole(Role.ADMIN) && id != user.getId()) {
            throw new UserUnauthorizedException("Usuário não tem acesso ao perfil de outros usuários");
        }
        Optional<User> userOpt = userRepository.findById(id);
        if (!userOpt.isPresent()) {
            throw new EntityNotFoundException("Usuário não encontrado");
        }
        return userOpt.get();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public static UserSecurity authenticated() {
        try{
            return (UserSecurity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        }
        catch (Exception e) {
            throw new UserUnauthorizedException("Usuário não autenticado");
        }

    }

    public User updateUser(Long id, User user) {
        User userFound = getUser(id);
        user.setPassword(userFound.getPassword());
        userFound = user;
        return userRepository.save(userFound);
    }
}
