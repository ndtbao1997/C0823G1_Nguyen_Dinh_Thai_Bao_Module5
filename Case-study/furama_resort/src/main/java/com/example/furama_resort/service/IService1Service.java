package com.example.furama_resort.service;

import com.example.furama_resort.dto.IService1DTO;
import com.example.furama_resort.model.Service1;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IService1Service extends IGeneratedService<Service1>{
    Page<IService1DTO> getAllVilla(Pageable pageable, Integer i);

    Page<IService1DTO> getAllHouse(Pageable pageable, Integer i);

    Page<IService1DTO> getAllRoom(Pageable pageable, Integer i);
}
