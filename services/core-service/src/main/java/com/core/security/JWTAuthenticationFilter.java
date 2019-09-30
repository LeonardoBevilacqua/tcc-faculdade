package com.core.security;

import com.core.dto.UserDTO;
import com.core.model.User;
import com.core.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.ApplicationContext;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private JWTUtil jwtUtil;
    private AuthenticationManager authenticationManager;
    private UserService userService;

    public JWTAuthenticationFilter(JWTUtil jwtUtil, AuthenticationManager authenticationManager, ApplicationContext ctx) {
        setAuthenticationFailureHandler(new JWTAuthenticationFailureHandler());
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
        this.userService = ctx.getBean(UserService.class);
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            UserDTO userDTO = new ObjectMapper().readValue(request.getInputStream(), UserDTO.class);
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDTO.getEmail(), userDTO.getPassword(), new ArrayList<>());
            Authentication auth = authenticationManager.authenticate(authToken);
            return auth;
        }
        catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        String email = ((UserSecurity) authResult.getPrincipal()).getUsername();
        String token = jwtUtil.generateToken(email);
        response.addHeader("Authorization", "Bearer " + token);
        response.addHeader("access-control-expose-headers", "Authorization");
        User user = userService.getUserByEmail(email);
        String json = new ObjectMapper().writeValueAsString(user);
        response.getWriter().write(json);
        response.flushBuffer();
    }
}
