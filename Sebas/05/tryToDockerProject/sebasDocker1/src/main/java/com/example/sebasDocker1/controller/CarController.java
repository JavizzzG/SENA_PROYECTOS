package com.example.sebasDocker1.controller;

import com.example.sebasDocker1.dto.CarRequestDto;
import com.example.sebasDocker1.dto.CarResponseDto;
import com.example.sebasDocker1.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sebas/api/car")
public class CarController {

    private final CarService carService;

    @GetMapping
    public ResponseEntity<List<CarResponseDto>> getAllCars() {
        return ResponseEntity.status(HttpStatus.OK).body(carService.getAllCars());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarResponseDto> getCarById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(carService.getCarById(id));
    }

    @PostMapping
    public ResponseEntity<CarResponseDto> createCar(@RequestBody CarRequestDto carReq) {
        return ResponseEntity.status(HttpStatus.OK).body(carService.createCar(carReq));
    }

    @PutMapping
    public ResponseEntity<CarResponseDto> updateCar(@PathVariable Long id, @RequestBody CarRequestDto carReq) {
        return ResponseEntity.status(HttpStatus.OK).body(carService.updateCar(id, carReq));
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }


}
