package com.example.thi_module5_be.service;

import com.example.thi_module5_be.dto.IProductDTO;
import com.example.thi_module5_be.model.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    Iterable<Product> findAll();

    List<IProductDTO> findAllAndSort();

    Optional<Product> findById(Integer id);
}
