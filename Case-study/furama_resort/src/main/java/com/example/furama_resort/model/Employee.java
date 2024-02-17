package com.example.furama_resort.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;


@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private LocalDate dateOfBirth;
    private String cardNumber;
    private String phoneNumber;
    private String email;
    private Long salary;
    @ManyToOne
    @JoinColumn(name = "qualification_id", referencedColumnName = "id")
    private Qualification qualification;
    @ManyToOne
    @JoinColumn(name="position_id", referencedColumnName = "id")
    private Position position;
    @ManyToOne
    @JoinColumn(name = "part_id",referencedColumnName = "id")
    private Part part;

    @OneToMany(mappedBy = "employee")
    private List<Contract> contractList;

    public Employee() {
    }

    public Employee(Integer id, String name, LocalDate dateOfBirth, String cardNumber, String phoneNumber, String email, Long salary, Qualification qualification, Position position, Part part, List<Contract> contractList) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.cardNumber = cardNumber;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.salary = salary;
        this.qualification = qualification;
        this.position = position;
        this.part = part;
        this.contractList = contractList;
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

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getSalary() {
        return salary;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    public Qualification getQualification() {
        return qualification;
    }

    public void setQualification(Qualification qualification) {
        this.qualification = qualification;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Part getPart() {
        return part;
    }

    public void setPart(Part part) {
        this.part = part;
    }

    public List<Contract> getContractList() {
        return contractList;
    }

    public void setContractList(List<Contract> contractList) {
        this.contractList = contractList;
    }
}
