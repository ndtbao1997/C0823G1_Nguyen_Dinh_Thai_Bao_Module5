package com.example.furama_resort.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "service_type")
public class ServiceType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @OneToMany(mappedBy = "serviceType")
    @JsonManagedReference
    private List<Service1> service1List;

    public ServiceType() {
    }

    public ServiceType(Integer id, String name, List<Service1> service1List) {
        this.id = id;
        this.name = name;
        this.service1List = service1List;
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

    public List<Service1> getServiceList() {
        return service1List;
    }

    public void setServiceList(List<Service1> service1List) {
        this.service1List = service1List;
    }
}
