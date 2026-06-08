package web.app.msz.nl.backend.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record TodoResponse(
        Long id,
        String title,
        String description,
        String tags,
        LocalDateTime createdAt,
        LocalDate deadlineDate,
        boolean completed
) {
}
