package com.bicycles.service;

import com.bicycles.dto.BicycleDTO;
import com.bicycles.entity.Bicycle;
import com.bicycles.repository.BicycleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BicycleService {

    private final BicycleRepository bicycleRepository;

    public BicycleService(BicycleRepository bicycleRepository){
        this.bicycleRepository = bicycleRepository;
    }


    public List<BicycleDTO> findAll(){
        return bicycleRepository.findAll().stream()
                .map(this::convertToDTO)
                .toList();
    }

    public BicycleDTO findById(Integer id){
        return convertToDTO(bicycleRepository.findById(id).orElseThrow(() -> new RuntimeException("Bicycle you are trying to get was not found")));
    }

    public BicycleDTO save(BicycleDTO data){
        Bicycle converted = convertToEntity(data);
        Bicycle response = bicycleRepository.save(converted);
        return convertToDTO(response);
    }

    public BicycleDTO update(Integer id, BicycleDTO data){
        Bicycle exist = bicycleRepository.findById(id).orElseThrow(() -> new RuntimeException("Bicycle to update was not found"));

        exist.setName_bic(data.getName_bic());
        exist.setModel_bic(data.getModel_bic());
        exist.setPrice_bic(data.getPrice_bic());

        Bicycle response = bicycleRepository.save(exist);
        return convertToDTO(response);
    }

    public void delete(Integer id){
        bicycleRepository.findById(id).orElseThrow(() -> new RuntimeException("Bicycle to delete was not found"));
        bicycleRepository.deleteById(id);
    }

    public Integer totalStock(){
        return bicycleRepository.findAll().stream()
                .mapToInt(Bicycle::getStock_bic)
                .sum();
    }



    private BicycleDTO convertToDTO(Bicycle data){
        return new BicycleDTO(data.getId_bic(), data.getName_bic(), data.getModel_bic(), data.getPrice_bic(), data.getStock_bic());
    }

    private Bicycle convertToEntity(BicycleDTO data){
        return new Bicycle(data.getId_bic(), data.getName_bic(), data.getModel_bic(), data.getPrice_bic(), data.getStock_bic());
    }
}
