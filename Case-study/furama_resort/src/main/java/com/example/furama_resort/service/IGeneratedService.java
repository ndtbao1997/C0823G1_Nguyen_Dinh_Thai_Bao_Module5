package com.example.furama_resort.service;

import jakarta.persistence.criteria.CriteriaBuilder;

import java.util.Optional;

public interface IGeneratedService<T> {
    Iterable<T> findAll();
    T save(T t);
    void deleteById(Integer id);
    Optional<T> findById(Integer id);
}
