package web.app.msz.nl.backend.dto;

import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;

public record TodoRequestDto(
        @NotBlank
        String name,
        String description,
        String tags,
        LocalDate deadlineDate
) {}
