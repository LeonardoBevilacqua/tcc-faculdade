package com.core.dto;

import com.core.model.ToDo;

import java.util.List;

public class UserToDoDTO {

    private List<ToDo> todos;

    public UserToDoDTO() {
    }

    public UserToDoDTO(List<ToDo> todos) {
        this.todos = todos;
    }

    public List<ToDo> getTodos() {
        return todos;
    }

    public void setTodos(List<ToDo> todos) {
        this.todos = todos;
    }
}
