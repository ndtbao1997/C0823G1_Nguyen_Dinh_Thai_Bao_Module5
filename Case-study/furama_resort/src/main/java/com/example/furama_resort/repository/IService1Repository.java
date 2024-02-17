package com.example.furama_resort.repository;

import com.example.furama_resort.dto.IService1DTO;
import com.example.furama_resort.model.Service1;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IService1Repository extends JpaRepository<Service1,Integer> {
    @Query(value = "select service.id as id,\n" +
            "service.area as area,\n" +
            "service.description as description,\n" +
            "service.floor as floor,\n" +
            "service.max_people as maxPeople,\n" +
            "service.pool_area as poolArea,\n" +
            "service.rental_cost as rentalCost,\n" +
            "service.service_free as serviceFree,\n" +
            "service.service_name as serviceName,\n" +
            "service.standards as standards,\n" +
            "rental_type.name as rentalTypeName,\n" +
            "service_type.name as serviceTypeName,\n" +
            "service.photo as photo\n" +
            "from service join rental_type on service.rental_type_id = rental_type.id\n" +
            "join service_type on service_type.id = service.service_type_id " +
            "where service.service_type_id = :i", nativeQuery = true)
    Page<IService1DTO> getAll(Pageable pageable, @Param("i") Integer i);
}
