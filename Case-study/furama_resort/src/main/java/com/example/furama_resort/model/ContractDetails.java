package com.example.furama_resort.model;

import jakarta.persistence.*;

@Entity
@Table(name = "contract_details")
public class ContractDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "contract_id", referencedColumnName = "id")
    private Contract contract;

    @ManyToOne
    @JoinColumn(name = "service_accompanied_id", referencedColumnName = "id")
    private ServiceAccompanied serviceAccompanied;

    public ContractDetails() {
    }

    public ContractDetails(Integer id, Contract contract, ServiceAccompanied serviceAccompanied) {
        this.id = id;
        this.contract = contract;
        this.serviceAccompanied = serviceAccompanied;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }

    public ServiceAccompanied getServiceAccompanied() {
        return serviceAccompanied;
    }

    public void setServiceAccompanied(ServiceAccompanied serviceAccompanied) {
        this.serviceAccompanied = serviceAccompanied;
    }
}
