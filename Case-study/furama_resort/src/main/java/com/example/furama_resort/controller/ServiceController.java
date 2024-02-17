package com.example.furama_resort.controller;

import com.example.furama_resort.dto.IService1DTO;
import com.example.furama_resort.model.Service1;
import com.example.furama_resort.service.IService1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ServiceController {
    @Autowired
    private IService1Service iService1Service;

    @GetMapping("/villa")
    public ResponseEntity<Page<IService1DTO>> getAllVilla(@PageableDefault(value = 6) Pageable pageable,@RequestParam("page") Integer page){
        Page<IService1DTO> iService1DTOS = iService1Service.getAllVilla(pageable, 1);
        System.out.println(iService1DTOS.getTotalPages());
        if (iService1DTOS.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(iService1DTOS,HttpStatus.OK);
    }

    @GetMapping("/home")
    public ResponseEntity<Page<IService1DTO>> getAllHouse(@PageableDefault(value = 6) Pageable pageable,@RequestParam("page") Integer page){
        Page<IService1DTO> iService1DTOS = iService1Service.getAllHouse(pageable, 2);
        System.out.println(iService1DTOS.getTotalPages());
        if (iService1DTOS.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(iService1DTOS,HttpStatus.OK);
    }

    @GetMapping("/room")
    public ResponseEntity<Page<IService1DTO>> getAllRoom(@PageableDefault(value = 6) Pageable pageable,@RequestParam("page") Integer page){
        Page<IService1DTO> iService1DTOS = iService1Service.getAllRoom(pageable, 3);
        System.out.println(iService1DTOS.getTotalPages());
        if (iService1DTOS.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(iService1DTOS,HttpStatus.OK);
    }

    @GetMapping("/villa/{id}")
    public ResponseEntity<Service1> getVillaById(@PathVariable Integer id){
        Optional<Service1> service1Optional = iService1Service.findById(id);
        if (service1Optional.isEmpty()){
            return ResponseEntity.noContent().build();
        }

        Service1 service1 = service1Optional.get();
        System.out.println(service1.getServiceName());
        return ResponseEntity.ok(service1);
    }

    @DeleteMapping("villa/{id}")
    public ResponseEntity<?> deleteVillaById(@PathVariable Integer id){
        iService1Service.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
