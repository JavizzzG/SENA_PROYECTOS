package com.bicycles.entity;

import jakarta.persistence.*;

@Entity
public class Bicycle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_bic;

    @Column
    private String name_bic;

    @Column
    private String model_bic;

    @Column
    private Double price_bic;

    @Column
    private Integer stock_bic;


    public Bicycle(Integer id_bic, String name_bic, String model_bic, Double price_bic, Integer stock_bic){
        this.id_bic = id_bic;
        this.name_bic = name_bic;
        this.model_bic = model_bic;
        this.price_bic = price_bic;
        this.stock_bic = stock_bic;
    }

    public Bicycle(){}



    public Integer getId_bic() {
        return id_bic;
    }

    public void setId_bic(Integer id_bic) {
        this.id_bic = id_bic;
    }

    public String getName_bic() {
        return name_bic;
    }

    public void setName_bic(String name_bic) {
        this.name_bic = name_bic;
    }

    public String getModel_bic() {
        return model_bic;
    }

    public void setModel_bic(String model_bic) {
        this.model_bic = model_bic;
    }

    public Double getPrice_bic() {
        return price_bic;
    }

    public void setPrice_bic(Double price_bic) {
        this.price_bic = price_bic;
    }

    public Integer getStock_bic() {
        return stock_bic;
    }

    public void setStock_bic(Integer stock_bic) {
        this.stock_bic = stock_bic;
    }
}
