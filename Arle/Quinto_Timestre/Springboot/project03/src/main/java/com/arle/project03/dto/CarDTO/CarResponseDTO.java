package com.arle.project03.dto.CarDTO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "DTO para respuesta de carros")
public class CarResponseDTO {
    @Schema(description = "El ID del carro es único", example = "1")
    private Long id;
    
    @Schema(description = "Placa del carro", example = "ABC123")
    private String plate;
    
    @Schema(description = "Modelo del carro", example = "Toyota Corolla")
    private String model;
    
    @Schema(description = "ID del cliente asociado", example = "1")
    private Long fk_id;
}
