package com.example.thi_module5_be.controller;

import com.example.thi_module5_be.dto.IProductDTO;
import com.example.thi_module5_be.model.Product;
import com.example.thi_module5_be.model.Type;
import com.example.thi_module5_be.service.IProductService;
import com.example.thi_module5_be.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin("*")
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private IProductService iProductService;
    @Autowired
    private ITypeService iTypeService;

    @GetMapping("/product")
    public ResponseEntity<List<IProductDTO>> findAll(){
        List<IProductDTO> products = iProductService.findAllAndSort();
        if (products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(products,HttpStatus.OK);
        }
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> findById(@PathVariable Integer id){
        Optional<Product> product = iProductService.findById(id);
        if(!product.isPresent()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(product.get(),HttpStatus.OK);
    }

    @GetMapping("/type")
    public ResponseEntity<List<Type>> findAllType(){
        List<Type> types = iTypeService.findAll();
        if (types.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(types,HttpStatus.OK);
    }

    @PatchMapping("/product/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Integer id, @RequestBody Type type){
        System.out.println(type);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
