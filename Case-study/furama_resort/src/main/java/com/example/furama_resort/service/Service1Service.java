package com.example.furama_resort.service;

import com.example.furama_resort.dto.IService1DTO;
import com.example.furama_resort.model.Service1;
import com.example.furama_resort.repository.IService1Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Service1Service implements IService1Service {

    @Autowired
    private IService1Repository iService1Repository;

    @Override
    public Iterable<Service1> findAll() {
        return iService1Repository.findAll();
    }

    @Override
    public Service1 save(Service1 service1) {
       return iService1Repository.save(service1);
    }

    @Override
    public void deleteById(Integer id) {
        iService1Repository.deleteById(id);
    }

    @Override
    public Optional<Service1> findById(Integer id) {
        return iService1Repository.findById(id);
    }

    @Override
    public Page<IService1DTO> getAllVilla(Pageable pageable, Integer i) {
        return iService1Repository.getAll(pageable, i);
    }

    @Override
    public Page<IService1DTO> getAllHouse(Pageable pageable, Integer i) {
        return iService1Repository.getAll(pageable,i);
    }

    @Override
    public Page<IService1DTO> getAllRoom(Pageable pageable, Integer i) {
        return iService1Repository.getAll(pageable,i);
    }
}
