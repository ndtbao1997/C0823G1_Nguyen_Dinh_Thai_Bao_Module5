package com.example.furama_resort.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "service_accompanied")
public class ServiceAccompanied {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String unitt;
    private Long price;
    @OneToMany(mappedBy = "serviceAccompanied")
    private List<ContractDetails> contractDetailsList;

    public ServiceAccompanied() {
    }

    public ServiceAccompanied(Integer id, String name, String unitt, Long price, List<ContractDetails> contractDetailsList) {
        this.id = id;
        this.name = name;
        this.unitt = unitt;
        this.price = price;
        this.contractDetailsList = contractDetailsList;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUnitt() {
        return unitt;
    }

    public void setUnitt(String unitt) {
        this.unitt = unitt;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public List<ContractDetails> getContractDetailsList() {
        return contractDetailsList;
    }

    public void setContractDetailsList(List<ContractDetails> contractDetailsList) {
        this.contractDetailsList = contractDetailsList;
    }
}
