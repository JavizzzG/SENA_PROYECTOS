package com.bicycles.dto;

import java.time.LocalDateTime;

public class SaleDTO {
    private Integer id_sale;
    private Integer bicycle_id;
    private String id_buyer;
    private String name_buyer;
    private LocalDateTime sale_date;

    public SaleDTO() {}

    public SaleDTO(Integer id_sale, Integer bicycle_id, String id_buyer, String name_buyer, LocalDateTime sale_date) {
        this.id_sale = id_sale;
        this.bicycle_id = bicycle_id;
        this.id_buyer = id_buyer;
        this.name_buyer = name_buyer;
        this.sale_date = sale_date;
    }

    public Integer getId_sale() {
        return id_sale;
    }

    public void setId_sale(Integer id_sale) {
        this.id_sale = id_sale;
    }

    public Integer getBicycle_id() {
        return bicycle_id;
    }

    public void setBicycle_id(Integer bicycle_id) {
        this.bicycle_id = bicycle_id;
    }

    public String getId_buyer() {
        return id_buyer;
    }

    public void setId_buyer(String id_buyer) {
        this.id_buyer = id_buyer;
    }

    public String getName_buyer() {
        return name_buyer;
    }

    public void setName_buyer(String name_buyer) {
        this.name_buyer = name_buyer;
    }

    public LocalDateTime getSale_date() {
        return sale_date;
    }

    public void setSale_date(LocalDateTime sale_date) {
        this.sale_date = sale_date;
    }
}
