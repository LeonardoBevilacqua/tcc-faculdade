package com.core.exception;

public class DatabaseOperationError extends RuntimeException{

    public DatabaseOperationError(String message) {
        super(message);
    }
}
