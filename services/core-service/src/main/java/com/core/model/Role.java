package com.core.model;

public enum Role {

    ADMIN(1, "ROLE_ADMIN"),
    HEADHUNTER(2, "ROLE_HEADHUNTER"),
    CANDIDATE(3, "ROLE_CANDIDATE"),
    RECRUTER_ADMIN(4, "ROLE_RECRUTER_ADMIN"),
    RECRUTER(5, "ROLE_RECRUTER");

    private int cod;
    private String description;

    Role(int cod, String description) {
        this.cod = cod;
        this.description = description;
    }

    public int getCod() {
        return cod;
    }

    public String getDescription() {
        return description;
    }

    public static Role toEnum(Integer cod) {
        if (cod == null) {
            return null;
        }
        for (Role x : Role.values()) {
            if (cod.equals(x.getCod())) {
                return x;
            }
        }
        throw new IllegalArgumentException("Id inválido: " + cod);
    }
}
