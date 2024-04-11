package com.example.thi_module5_be.service;

import com.example.thi_module5_be.model.Type;
import com.example.thi_module5_be.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Service
public class TypeService implements ITypeService{
    @Autowired
    private TypeRepository typeRepository;

    @Override
    public List<Type> findAll() {
        return typeRepository.findAll();
    }
}
