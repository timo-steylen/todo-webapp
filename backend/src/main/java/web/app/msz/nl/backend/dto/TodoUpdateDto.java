package web.app.msz.nl.backend.dto;

/**
 * This DTO is only used for setting the status: <code>completed/not completed</code>.
 *
 * It might initially seem too much. However, in case other fields need to be modified in
 * the future, this DTO can be used.
 */
public record TodoUpdateDto(
    boolean completed)
{}
