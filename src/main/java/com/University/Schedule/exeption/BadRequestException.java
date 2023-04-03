package com.University.Schedule.exeption;

public class BadRequestException  extends RuntimeException {

    private final String message;

    public BadRequestException(final String message) {
        super(message);
        this.message = message;
    }


    public String getMessage() {
        return message;
    }
}
