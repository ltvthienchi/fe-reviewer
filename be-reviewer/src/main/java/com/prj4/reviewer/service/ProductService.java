package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Product;
import com.prj4.reviewer.reporsitory.ProductReporsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductReporsitory productReporsitory;

    public void saveProduct(Product p) {
        productReporsitory.save(p);
    }

    public Product getProductById(String id) {
        return productReporsitory.findByIdProduct(id);
    }

    public void findAndUpdate(String id) {
        Product curProduct = productReporsitory.findByIdProduct(id);

    }
}
