package web.app.msz.nl.backend.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record TodoResponseDto(
        Long id,
        String name,
        String description,
        String tags,
        LocalDateTime createdAt,
        LocalDate deadlineDate,
        boolean completed
) {}
