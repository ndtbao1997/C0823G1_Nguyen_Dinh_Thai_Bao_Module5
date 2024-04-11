package com.example.thi_module5_be.repository;

import com.example.thi_module5_be.dto.IProductDTO;
import com.example.thi_module5_be.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "select product.id as id, product.name as name, type.name as typeName, product.quantity as quantity, product.date as date from product join type on product.type_id = type.id order by quantity asc;",nativeQuery = true)
    List<IProductDTO> findAllAndSort();
}
