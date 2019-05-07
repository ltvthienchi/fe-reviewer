package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductReporsitory extends CrudRepository<Product, String> {
    Product findByIdProduct(String idProduct);
    List<Product> findAllByOrderByDtCreatedDesc();
}
