package web.app.msz.nl.backend.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record TodoResponseDto(
        Long id,
        String title,
        String description,
        String tags,
        LocalDateTime createdAt,
        LocalDate deadlineDate,
        boolean completed
) {
}
