package com.example.thi_module5_be.dto;

import java.time.LocalDate;

public interface IProductDTO {
    Integer getId();
    String getName();
    LocalDate getDate();
    Integer getQuantity();
    String getTypeName();
}
