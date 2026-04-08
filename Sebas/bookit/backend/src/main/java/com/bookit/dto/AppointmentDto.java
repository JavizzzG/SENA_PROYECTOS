package com.bookit.dto;

import com.bookit.model.AppointmentStatus;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class AppointmentDto {

    @Data
    public static class CreateRequest {
        @NotBlank(message = "El nombre del cliente es obligatorio")
        private String clientName;

        @NotBlank(message = "El correo del cliente es obligatorio")
        @Email(message = "El correo no tiene un formato válido")
        private String clientEmail;

        @NotNull(message = "La fecha es obligatoria")
        private LocalDate appointmentDate;

        @NotNull(message = "La hora es obligatoria")
        private LocalTime appointmentTime;

        @NotNull(message = "El servicio es obligatorio")
        private Long serviceId;
    }

    @Data
    public static class StatusUpdateRequest {
        @NotNull(message = "El estado es obligatorio")
        private AppointmentStatus status;
    }

    @Data
    public static class Response {
        private Long id;
        private String clientName;
        private String clientEmail;
        private LocalDate appointmentDate;
        private LocalTime appointmentTime;
        private AppointmentStatus status;
        private ServiceDto.Response service;
        private LocalDateTime createdAt;
    }
}
