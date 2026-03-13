package com.arle.project03.controller;

import com.arle.project03.dto.CarDTO.CarRequestDTO;
import com.arle.project03.dto.CarDTO.CarResponseDTO;
import com.arle.project03.service.CarService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("arle03/car")
@Tag(name = "Controller para carros", description = "endpoints para gestionar los carros")
public class CarController {
    private final CarService carService;

//    @Operation(responses = {
//            @ApiResponse(responseCode = "200", content = @Content(schema = @Schema(implementation = User.class))),
//            @ApiResponse(responseCode = "404", description = "Usuario no encontrado")
//    })

    @Operation(summary = "Obtener todos los carros")
    @GetMapping
    public List<CarResponseDTO> findAllCars(){
        return carService.findAll();
    }

    @Operation(summary = "Obtener carro por ID")
    @GetMapping("/{id}")
    public CarResponseDTO findCarById(@PathVariable Long id){
        return carService.findById(id);
    }

    @Operation(summary = "Crear carro", description = "Agrega un nuevo carro")
    @ApiResponse(responseCode = "201", description = "Carro creado")
    @PostMapping
    public CarResponseDTO saveCar(@RequestBody CarRequestDTO carRequest){
        return carService.save(carRequest);
    }

    @Operation(summary = "Actualizar carro", description = "Actualiza los datos de un carro existente")
    @ApiResponse(responseCode = "200", description = "Carro actualizado")
    @PutMapping("/{id}")
    public CarResponseDTO updateCar(@PathVariable Long id, @RequestBody CarRequestDTO carRequest){
        return carService.update(id, carRequest);
    }

    @Operation(summary = "Eliminar carro", description = "Elimina un carro por su ID")
    @ApiResponse(responseCode = "204", description = "Carro eliminado")
    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable Long id){
        carService.delete(id);
    }
}
