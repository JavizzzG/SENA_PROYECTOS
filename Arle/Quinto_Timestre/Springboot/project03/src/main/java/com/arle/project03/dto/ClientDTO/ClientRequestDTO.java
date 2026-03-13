package com.arle.project03.dto.ClientDTO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "DTO para crear o actualizar clientes")
public class ClientRequestDTO {
    @Schema(description = "Documento del cliente", example = "123456789")
    private String document;
    
    @Schema(description = "Nombre completo del cliente", example = "Juan Pérez")
    private String name;
}
