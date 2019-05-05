package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductReporsitory extends CrudRepository<Product, String> {
}
