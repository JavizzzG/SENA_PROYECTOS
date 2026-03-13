package com.arle.project03.controller;

import com.arle.project03.dto.ClientDTO.ClientRequestDTO;
import com.arle.project03.dto.ClientDTO.ClientResponseDTO;
import com.arle.project03.service.ClientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("arle03/client")
@Tag(name = "Controller para clientes", description = "endpoints para gestionar los clientes")
public class ClientController {
    private final ClientService clientService;

    @Operation(summary = "Obtener todos los clientes")
    @GetMapping
    public List<ClientResponseDTO> findAllClients(){
        return clientService.findAll();
    }

    @Operation(summary = "Obtener cliente por ID")
    @GetMapping("/{id}")
    public ClientResponseDTO findClientById(@PathVariable Long id){
        return clientService.findById(id);
    }

    @Operation(summary = "Crear cliente", description = "Agrega un nuevo cliente")
    @ApiResponse(responseCode = "201", description = "Cliente creado")
    @PostMapping
    public ClientResponseDTO saveClient(@RequestBody ClientRequestDTO clientRequest){
        return clientService.save(clientRequest);
    }

    @Operation(summary = "Actualizar cliente", description = "Actualiza los datos de un cliente existente")
    @ApiResponse(responseCode = "200", description = "Cliente actualizado")
    @PutMapping("/{id}")
    public ClientResponseDTO updateClient(@PathVariable Long id, @RequestBody ClientRequestDTO clientRequest){
        return clientService.update(id, clientRequest);
    }

    @Operation(summary = "Eliminar cliente", description = "Elimina un cliente por su ID")
    @ApiResponse(responseCode = "204", description = "Cliente eliminado")
    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable Long id){
        clientService.delete(id);
    }
}
