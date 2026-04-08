package com.bookit.dto;

import lombok.Data;

public class ServiceDto {

    @Data
    public static class Response {
        private Long id;
        private String name;
        private String description;
        private Integer duration;
    }
}
