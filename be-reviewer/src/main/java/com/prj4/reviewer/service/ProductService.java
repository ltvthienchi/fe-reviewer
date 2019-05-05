package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Product;
import com.prj4.reviewer.reporsitory.ProductReporsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    ProductReporsitory productReporsitory;

    public void saveProduct(Product p) {
        productReporsitory.save(p);
    }
}
