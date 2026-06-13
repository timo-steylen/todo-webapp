package web.app.msz.nl.backend.persistence.mappers;

import org.mapstruct.Mapper;
import web.app.msz.nl.backend.dto.TodoRequestDto;
import web.app.msz.nl.backend.dto.TodoResponseDto;
import web.app.msz.nl.backend.persistence.entities.Todo;

import java.util.List;

/**
 * Mapper for mapping persistence-layer (Entity) to service-layer (DTO)
 */
@Mapper(componentModel = "spring")
public interface TodoMapper {

    TodoResponseDto toResponseDto(Todo todo);

    Todo toEntity(TodoRequestDto requestDto);
}
