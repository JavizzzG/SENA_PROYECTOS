package com.arle.project03.service;

import com.arle.project03.dto.CarDTO.CarRequestDTO;
import com.arle.project03.dto.CarDTO.CarResponseDTO;
import com.arle.project03.entity.Car;
import com.arle.project03.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarService {
    private final CarRepository carRepository;

    public List<CarResponseDTO> findAll(){
        return carRepository.findAll().stream()
                .map(this::convertToDTO)
                .toList();
    }

    public CarResponseDTO findById(Long id){
        return carRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new RuntimeException("Car not found"));
    }

    public CarResponseDTO save(CarRequestDTO carRequest){
        Car car = convertToEntity(carRequest);
        carRepository.save(car);
        return convertToDTO(car);
    }

    public CarResponseDTO update(Long id, CarRequestDTO carRequest){
        Car car = carRepository.findById(id).orElseThrow(() -> new RuntimeException("Car was not found"));
        car.setPlate(carRequest.getPlate());
        car.setModel(carRequest.getModel());
        car.setFk_id(carRequest.getFk_id());
        carRepository.save(car);
        return convertToDTO(car);
    }

    public void delete(Long id){
        if(carRepository.findById(id).isPresent()){
            carRepository.deleteById(id);
        }
    }





    private CarResponseDTO convertToDTO (Car car){
        CarResponseDTO carResponse = new CarResponseDTO();
        carResponse.setId(car.getId());
        carResponse.setPlate(car.getPlate());
        carResponse.setModel(car.getModel());
        carResponse.setFk_id(car.getFk_id());
        return carResponse;
    }

    private Car convertToEntity(CarRequestDTO carRequest){
        Car car = new Car();
        car.setPlate(carRequest.getPlate());
        car.setModel(carRequest.getModel());
        car.setFk_id(carRequest.getFk_id());
        return car;
    }

}
