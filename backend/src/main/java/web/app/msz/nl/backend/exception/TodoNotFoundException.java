package web.app.msz.nl.backend.exception;

public class TodoNotFoundException extends RuntimeException {

    public TodoNotFoundException(Long todoId) {
        super("Todo with id " + todoId + " not found");
    }
}
