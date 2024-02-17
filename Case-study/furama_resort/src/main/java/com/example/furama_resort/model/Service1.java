package com.example.furama_resort.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "service")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Service1 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String serviceName;
    private Double area;
    private Long rentalCost;
    private Integer maxPeople;
    private String standards;
    private String description;
    private Double poolArea;
    private Integer floor;

    private String serviceFree;

    private String photo;

    @ManyToOne
    @JoinColumn(name = "rental_type_id", referencedColumnName = "id")
    @JsonBackReference
    private RentalType rentalType;
    @ManyToOne
    @JoinColumn(name = "service_type_id", referencedColumnName = "id")
    @JsonBackReference
    private ServiceType serviceType;

    @OneToMany(mappedBy = "service1")
    @JsonManagedReference
    private List<Contract> contractList;

    public Service1() {
    }

    public Service1(Integer id, String serviceName, Double area, Long rentalCost, Integer maxPeople, String standards, String description, Double poolArea, Integer floor, String serviceFree, String photo, RentalType rentalType, ServiceType serviceType, List<Contract> contractList) {
        this.id = id;
        this.serviceName = serviceName;
        this.area = area;
        this.rentalCost = rentalCost;
        this.maxPeople = maxPeople;
        this.standards = standards;
        this.description = description;
        this.poolArea = poolArea;
        this.floor = floor;
        this.serviceFree = serviceFree;
        this.photo = photo;
        this.rentalType = rentalType;
        this.serviceType = serviceType;
        this.contractList = contractList;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public Long getRentalCost() {
        return rentalCost;
    }

    public void setRentalCost(Long rentalCost) {
        this.rentalCost = rentalCost;
    }

    public Integer getMaxPeople() {
        return maxPeople;
    }

    public void setMaxPeople(Integer maxPeople) {
        this.maxPeople = maxPeople;
    }

    public String getStandards() {
        return standards;
    }

    public void setStandards(String standards) {
        this.standards = standards;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPoolArea() {
        return poolArea;
    }

    public void setPoolArea(Double poolArea) {
        this.poolArea = poolArea;
    }

    public Integer getFloor() {
        return floor;
    }

    public void setFloor(Integer floor) {
        this.floor = floor;
    }

    public String getServiceFree() {
        return serviceFree;
    }

    public void setServiceFree(String serviceFree) {
        this.serviceFree = serviceFree;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public RentalType getRentalType() {
        return rentalType;
    }

    public void setRentalType(RentalType rentalType) {
        this.rentalType = rentalType;
    }

    public ServiceType getServiceType() {
        return serviceType;
    }

    public void setServiceType(ServiceType serviceType) {
        this.serviceType = serviceType;
    }

    public List<Contract> getContractList() {
        return contractList;
    }

    public void setContractList(List<Contract> contractList) {
        this.contractList = contractList;
    }
}
