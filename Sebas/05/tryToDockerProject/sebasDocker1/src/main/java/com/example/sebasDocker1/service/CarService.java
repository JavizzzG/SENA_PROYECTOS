package com.example.sebasDocker1.service;

import com.example.sebasDocker1.dto.CarRequestDto;
import com.example.sebasDocker1.dto.CarResponseDto;
import com.example.sebasDocker1.entity.Car;
import com.example.sebasDocker1.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepository carRepository;

    public List<CarResponseDto> getAllCars() {
        return carRepository.findAll().stream()
                .map(this::toDto)
                .toList();
    }

    public CarResponseDto getCarById(Long id){
        Car car = carRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Car not found"));
        return toDto(car);
    }

    public CarResponseDto createCar(CarRequestDto carReq){
        Car car = toEntity(carReq);
        carRepository.save(car);
        return toDto(car);
    }

    public CarResponseDto updateCar(Long id, CarRequestDto carReq){
        Car car = carRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Car not found"));
        car.setName(carReq.getName());
        car.setYear(carReq.getYear());
        carRepository.save(car);
        return toDto(car);
    }

    public void deleteCar(Long id){
        carRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Car not found"));
        carRepository.deleteById(id);
    }






    private CarResponseDto toDto (Car car){
        CarResponseDto carRes = new CarResponseDto();
        carRes.setId(car.getId());
        carRes.setName(car.getName());
        carRes.setYear(car.getYear());
        return carRes;
    }


    private Car toEntity (CarRequestDto carReq){
        Car car = new Car();
        car.setName(carReq.getName());
        car.setYear(carReq.getYear());
        return car;
    }


}
