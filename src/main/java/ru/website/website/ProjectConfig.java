package ru.website.website;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProjectConfig {
    @Bean
    DiscContainer discContainer() {
        return new DiscContainer();
    }
}
