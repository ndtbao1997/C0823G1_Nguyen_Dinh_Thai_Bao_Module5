package com.example.furama_resort.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "contract")
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String numberContract;
    private LocalDate startTime;
    private LocalDate endTime;
    private Long totalPay;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "service_id",referencedColumnName = "id")
    @JsonBackReference
    private Service1 service1;

    @OneToMany(mappedBy = "contract")
    private List<ContractDetails> contractDetailsList;

    public Contract() {
    }

    public Contract(Integer id, String numberContract, LocalDate startTime, LocalDate endTime, Long totalPay, Customer customer, Employee employee, Service1 service1, List<ContractDetails> contractDetailsList) {
        this.id = id;
        this.numberContract = numberContract;
        this.startTime = startTime;
        this.endTime = endTime;
        this.totalPay = totalPay;
        this.customer = customer;
        this.employee = employee;
        this.service1 = service1;
        this.contractDetailsList = contractDetailsList;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNumberContract() {
        return numberContract;
    }

    public void setNumberContract(String numberContract) {
        this.numberContract = numberContract;
    }

    public LocalDate getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDate startTime) {
        this.startTime = startTime;
    }

    public LocalDate getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDate endTime) {
        this.endTime = endTime;
    }

    public Long getTotalPay() {
        return totalPay;
    }

    public void setTotalPay(Long totalPay) {
        this.totalPay = totalPay;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Service1 getService() {
        return service1;
    }

    public void setService(Service1 service1) {
        this.service1 = service1;
    }

    public List<ContractDetails> getContractDetailsList() {
        return contractDetailsList;
    }

    public void setContractDetailsList(List<ContractDetails> contractDetailsList) {
        this.contractDetailsList = contractDetailsList;
    }
}
