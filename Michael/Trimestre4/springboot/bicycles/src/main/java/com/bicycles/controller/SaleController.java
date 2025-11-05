package com.bicycles.controller;

import com.bicycles.dto.SaleDTO;
import com.bicycles.service.SaleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SaleController {

    private final SaleService saleService;

    public SaleController(SaleService saleService){
        this.saleService = saleService;
    }

    @GetMapping("/sales")
    public List<SaleDTO> findAllSales(){
        return saleService.findAll();
    }

    @GetMapping("/sales/{id}")
    public SaleDTO findSaleById(@PathVariable Integer id){
        return saleService.findById(id);
    }

    @PostMapping("/sales")
    public SaleDTO saveSale(@RequestBody SaleDTO saleDTO){
        return saleService.save(saleDTO);
    }

    @PutMapping("/sales/{id}")
    public SaleDTO updateSale(@PathVariable Integer id, @RequestBody SaleDTO saleDTO){
        return saleService.update(id, saleDTO);
    }

    @DeleteMapping("/sales/{id}")
    public String deleteSale(@PathVariable Integer id){
        return saleService.delete(id);
    }
}
