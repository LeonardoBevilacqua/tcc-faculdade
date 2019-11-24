package com.core.controller;

import com.core.model.ToDo;
import com.core.model.User;
import com.core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping
    public ResponseEntity<?> getUsers() {
        return ResponseEntity.ok(userService.getUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUser(id));
    }

    @PostMapping
    public ResponseEntity<?> saveUser(@RequestBody User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return ResponseEntity.ok(userService.saveUser(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User user) {
        return ResponseEntity.ok(userService.updateUser(id, user));
    }

    @GetMapping("/{id}/todo")
    public ResponseEntity<?> getUserTodos(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserTodos(id));
    }

    @PutMapping("/{id}/todo/add")
    public ResponseEntity<?> addUserTodo(@PathVariable Long id, @RequestBody ToDo todo) {
        return ResponseEntity.ok(userService.addUserTodo(id, todo));
    }

    @DeleteMapping("/{id}/todo/{todoId}/remove")
    public ResponseEntity<?> deleteUserTodo(@PathVariable Long id, @PathVariable Long todoId) {
        return ResponseEntity.ok(userService.deleteUserTodo(id, todoId));
    }

    @GetMapping("/{userId}/dashboard")
    public ResponseEntity<?> getDashboardStats(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getDashboradStats(userId));
    }

    @PostMapping("/{userId}/activate")
    public ResponseEntity<?> activateUser(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.activateUser(userId));
    }
}
