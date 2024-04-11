package com.example.thi_module5_be.service;

import com.example.thi_module5_be.dto.IProductDTO;
import com.example.thi_module5_be.model.Product;
import com.example.thi_module5_be.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService{
    @Autowired
    private ProductRepository productRepository;

    @Override
    public Iterable<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public List<IProductDTO> findAllAndSort() {
        return productRepository.findAllAndSort();
    }

    @Override
    public Optional<Product> findById(Integer id) {
        return productRepository.findById(id);
    }
}
