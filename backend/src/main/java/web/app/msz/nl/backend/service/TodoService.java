package web.app.msz.nl.backend.service;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import web.app.msz.nl.backend.dto.TodoRequestDto;
import web.app.msz.nl.backend.dto.TodoResponseDto;
import web.app.msz.nl.backend.exception.TodoNotFoundException;
import web.app.msz.nl.backend.persistence.entities.Todo;
import web.app.msz.nl.backend.persistence.mappers.TodoMapper;
import web.app.msz.nl.backend.persistence.repository.TodoRepository;

import java.time.LocalDateTime;
import java.util.List;


/**
 * Service Implementation for managing {@link web.app.msz.nl.backend.persistence.entities.Todo}.
 */
@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepository todoRepository;
    private final TodoMapper todoMapper;

    public List<TodoResponseDto> getAllTodos() {
        List<Todo> todos = todoRepository.findAll();
        return todoMapper.toResponseDtoList(todos);
    }

    public TodoResponseDto getTodoById(Long todoId) {
        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new TodoNotFoundException(todoId));

        return todoMapper.toResponseDto(todo);
    }

    @Transactional
    public TodoResponseDto createTodo(TodoRequestDto request) {
        Todo todo = todoMapper.toEntity(request);

        todo.setCreatedAt(LocalDateTime.now());
        todo.setCompleted(false);

        Todo savedTodo = todoRepository.save(todo);

        return todoMapper.toResponseDto(savedTodo);
    }

}
