package com.bicycles.service;

import com.bicycles.dto.SaleDTO;
import com.bicycles.entity.Bicycle;
import com.bicycles.entity.Sale;
import com.bicycles.repository.BicycleRepository;
import com.bicycles.repository.SaleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleService {
    private final SaleRepository saleRepository;
    private final BicycleRepository bicycleRepository;

    public SaleService(SaleRepository saleRepository, BicycleRepository bicycleRepository){
        this.saleRepository = saleRepository;
        this.bicycleRepository = bicycleRepository;
    }

    public List<SaleDTO> findAll(){
        return saleRepository.findAll().stream().
                map(this::convertToDTO)
                .toList();
    }

    public SaleDTO findById(Integer id){
        return saleRepository.findById(id)
                .map(this::convertToDTO)
                .orElse(null);
    }

    public SaleDTO save(SaleDTO saleDTO){

        Bicycle bicycle = bicycleRepository.findById(saleDTO.getBicycle_id())
                .orElseThrow(() -> new RuntimeException("Bicycle not found"));

        if(bicycle.getStock_bic() <= 0){
            throw new RuntimeException("No enough stock");
        }

        bicycle.setStock_bic(bicycle.getStock_bic() - 1);
        bicycleRepository.save(bicycle);

        Sale sale = convertToEntity(saleDTO);
        Sale saleSaved = saleRepository.save(sale);
        return convertToDTO(saleSaved);
    }

    public SaleDTO update(Integer id_sale, SaleDTO saleDTO){
        saleRepository.findById(id_sale)
                .orElseThrow(() -> new RuntimeException("Sale not found"));
        saleDTO.setId_sale(id_sale);
        Sale saleSaved = saleRepository.save(convertToEntity(saleDTO));
        return convertToDTO(saleSaved);
    }

    public String delete(Integer id){
        saleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sale to delete was not found"));
        saleRepository.deleteById(id);

        return "The sale was deleted successfully";
    }



    private SaleDTO convertToDTO(Sale sale){
        return new SaleDTO(sale.getId_sale(), sale.getBicycle_id().getId_bic(), sale.getId_buyer(), sale.getName_buyer(), sale.getSale_date());
    }

    private Sale convertToEntity(SaleDTO saleDTO){
        Bicycle bicycle = new Bicycle();
        bicycle.setId_bic(saleDTO.getBicycle_id());

        return new Sale(saleDTO.getId_sale(), bicycle, saleDTO.getId_buyer(), saleDTO.getName_buyer(), saleDTO.getSale_date());
    }
}
