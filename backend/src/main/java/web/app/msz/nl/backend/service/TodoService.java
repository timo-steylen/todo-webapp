package web.app.msz.nl.backend.service;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import web.app.msz.nl.backend.dto.TodoResponse;
import web.app.msz.nl.backend.exception.TodoNotFoundException;
import web.app.msz.nl.backend.persistence.entities.Todo;
import web.app.msz.nl.backend.persistence.mappers.TodoMapper;
import web.app.msz.nl.backend.persistence.repository.TodoRepository;


/**
 * Service Implementation for managing {@link web.app.msz.nl.backend.persistence.entities.Todo}.
 */
@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepository todoRepository;
    private final TodoMapper todoMapper;

    public TodoResponse findOneById(Long todoId) {

        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new TodoNotFoundException(todoId));

        return todoMapper.toResponse(todo);
    }
}
