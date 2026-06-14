package web.app.msz.nl.backend.persistence.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import web.app.msz.nl.backend.dto.TodoRequestDto;
import web.app.msz.nl.backend.dto.TodoResponseDto;
import web.app.msz.nl.backend.persistence.entities.Todo;


/**
 * Mapper for mapping persistence-layer (Entity) to service-layer (DTO)
 */
@Mapper(componentModel = "spring")
public interface TodoMapper {

    TodoResponseDto toResponseDto(Todo todo);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "completed", ignore = true)
    Todo toEntity(TodoRequestDto requestDto);
}
