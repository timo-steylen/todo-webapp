package web.app.msz.nl.backend.api;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.app.msz.nl.backend.dto.TodoRequestDto;
import web.app.msz.nl.backend.dto.TodoResponseDto;
import web.app.msz.nl.backend.service.TodoService;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @GetMapping
    public ResponseEntity<List<TodoResponseDto>> getAllTodos() {
        List<TodoResponseDto> todos = todoService.getAllTodos();
        return ResponseEntity.ok(todos);
    }

    @GetMapping("/{todoId}")
    public ResponseEntity<TodoResponseDto> getTodoById(@PathVariable Long todoId) {
        TodoResponseDto todo = todoService.getTodoById(todoId);
        return ResponseEntity.ok(todo);
    }

    @PostMapping
    public ResponseEntity<TodoResponseDto> createTodo(@Valid @RequestBody TodoRequestDto request) {
        TodoResponseDto response = todoService.createTodo(request);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
}
