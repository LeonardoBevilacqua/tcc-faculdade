package com.core.service;

import com.core.dto.DashboardStats;
import com.core.dto.UserLoginDTO;
import com.core.dto.UserSimpleDTO;
import com.core.dto.UserToDoDTO;
import com.core.exception.EntityNotFoundException;
import com.core.exception.UserUnauthorizedException;
import com.core.model.Job;
import com.core.model.Role;
import com.core.model.ToDo;
import com.core.model.User;
import com.core.respository.JobRepository;
import com.core.respository.TodoRepository;
import com.core.respository.UserRepository;
import com.core.security.UserSecurity;
import com.core.util.DashboardAggregate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private JobRepository jobRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUser(Long id) throws RuntimeException {
        UserSecurity user = UserService.authenticated();
        if(!user.hasRole(Role.ROLE_ADMIN) && id != user.getId()) {
            throw new UserUnauthorizedException("Usuário não tem acesso ao perfil de outros usuários");
        }
        Optional<User> userOpt = userRepository.findById(id);
        if (!userOpt.isPresent()) {
            throw new EntityNotFoundException("Usuário não encontrado");
        }
        return userOpt.get();
    }

    public User saveUser(User user) {
    	user.getProfile().setEmail(user.getEmail());
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
        user.setProfile(userFound.getProfile());
        
        userFound = user;
        userFound.setEmail(userFound.getEmail());
        return userRepository.save(userFound);
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public List<ToDo> getUserTodos(Long id) {
        return getUser(id).getToDos();
    }

    public List<ToDo> addUserTodo(Long id, ToDo todo) {
        User user = getUser(id);
        user.getToDos().add(todo);
        todoRepository.save(todo);
        saveUser(user);
        return user.getToDos();
    }

    public List<ToDo> deleteUserTodo(Long id, Long todoId) {
        todoRepository.deleteById(todoId);
        User user = getUser(id);
        return user.getToDos();
    }

    public UserToDoDTO buildUserToDos(User user) {
        return new UserToDoDTO(user.getToDos());
    }

    public UserSimpleDTO convertUserToSimple(User user) {
        return new UserSimpleDTO(user.getId(), user.getEmail(),
                user.getProfile().getName() + ' ' + user.getProfile().getLastName());
    }

    public UserLoginDTO convertUserToLogin(User user) {
        return new UserLoginDTO(user.getId(),
                user.getCpf(),
                user.getEmail(),
                user.getProfileId(),
                user.getCompanyId(),
                user.getRoles());
    }

    public DashboardStats getDashboradStats(Long userId) {
        User user = getUser(userId);
        List<Job> jobs = null;
        if (user.getRoles().contains(Role.ROLE_ADMIN) || user.getRoles().contains(Role.ROLE_RECRUTER_ADMIN) ||
                user.getRoles().contains(Role.ROLE_RECRUTER)) {
            jobs = jobRepository.findByCompanyId(user.getCompanyId());
        } else if (user.getRoles().contains(Role.ROLE_HEADHUNTER)) {
            jobs = jobRepository.findByHeadhunterId(userId);
        } else {
            jobs = jobRepository.findByUsersId(userId);
        }
        DashboardStats dashboardStats = new DashboardStats();
        HashMap<String, Long> response = DashboardAggregate.aggegateByProcessTotal(jobs);
        dashboardStats.setAwaitingHeadhunter(response.get("awaitingHeadhunter"));
        dashboardStats.setProcessTotal(response.get("processTotal"));
        dashboardStats.setTotalFinished(response.get("totalFinished"));
        return dashboardStats;
    }
}
