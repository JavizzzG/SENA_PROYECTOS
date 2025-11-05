package com.bicycles.controller;

import com.bicycles.dto.BicycleDTO;
import com.bicycles.service.BicycleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BicycleController {

    private final BicycleService bicycleService;

    public BicycleController(BicycleService bicycleService){
        this.bicycleService = bicycleService;
    }


    @GetMapping("/bicycle")
    public List<BicycleDTO> getAllBicycles(){
        return bicycleService.findAll();
    }

    @GetMapping("/bicycle/{id}")
    public BicycleDTO getBicycleById(@PathVariable Integer id){
        return bicycleService.findById(id);
    }

    @PostMapping("/bicycle")
    public BicycleDTO storeNewBicycle(@RequestBody BicycleDTO data){
        return bicycleService.save(data);
    }

    @PutMapping("/bicycle/{id}")
    public BicycleDTO updateBicycle(@PathVariable Integer id, @RequestBody BicycleDTO data){
        return bicycleService.update(id, data);
    }

    @DeleteMapping("/bicycle/{id}")
    public void deleteBicycle(@PathVariable Integer id){
        bicycleService.delete(id);
    }

    @GetMapping("/bicycle/stock")
    public String totalStock(){

        Integer stock = bicycleService.totalStock();
        if(stock == 0){
            return "No hay stock";
        }

        return  "El stock total es: " + stock;
    }
}
