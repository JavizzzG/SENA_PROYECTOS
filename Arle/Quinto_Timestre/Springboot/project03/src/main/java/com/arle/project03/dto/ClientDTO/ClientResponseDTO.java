package com.arle.project03.dto.ClientDTO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "DTO para respuesta de clientes")
public class ClientResponseDTO {
    @Schema(description = "ID único del cliente que es Int", example = "1")
    private Long id;
    
    @Schema(description = "Documento del clientem de máximo 13 caracteres", example = "123456789")
    private String document;
    
    @Schema(description = "Nombre completo del cliente de máximo 60 caracteres", example = "Juan Pérez")
    private String name;
}
