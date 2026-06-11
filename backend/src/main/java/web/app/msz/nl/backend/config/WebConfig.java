package web.app.msz.nl.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


/**
 * This config makes sense only during development.
 * During development, it's handy to have the API and UI running separately.
 * So you run the UI using <code>ng serve</code>. This will start Angular server on port 4200 (by default) which is different from the app's port (8090).
 * Hence, the need to configure cors.
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:4200")
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS");
    }
}
