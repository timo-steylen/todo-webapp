package web.app.msz.nl.backend.persistence.mappers;

import org.mapstruct.Mapper;
import web.app.msz.nl.backend.dto.TodoResponse;
import web.app.msz.nl.backend.persistence.entities.Todo;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TodoMapper {

    TodoResponse toResponse(Todo todo);

    List<TodoResponse> toResponseList(List<Todo> todos);

}
