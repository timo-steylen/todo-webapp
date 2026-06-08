package web.app.msz.nl.backend.api;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import web.app.msz.nl.backend.dto.TodoResponse;
import web.app.msz.nl.backend.service.TodoService;

@RestController
@RequestMapping("/api/todos")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @GetMapping("/{todoId}")
    public ResponseEntity<TodoResponse> getTodo(@PathVariable Long todoId) {
        TodoResponse todo = todoService.findOneById(todoId);
        return ResponseEntity.ok(todo);
    }
}
