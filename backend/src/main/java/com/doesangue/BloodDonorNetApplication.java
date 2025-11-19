package com.doesangue;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.doesangue.model")
@EnableJpaRepositories(basePackages = "com.doesangue.repository")
public class BloodDonorNetApplication {

    public static void main(String[] args) {
        SpringApplication.run(BloodDonorNetApplication.class, args);
    }
}