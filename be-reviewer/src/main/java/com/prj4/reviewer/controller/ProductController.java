package com.prj4.reviewer.controller;

import com.prj4.reviewer.entity.Product;
import com.prj4.reviewer.request.ProductRequest;
import com.prj4.reviewer.response.PostResponse;
import com.prj4.reviewer.service.GenerateId;
import com.prj4.reviewer.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)

public class ProductController {
    private final static String BASE_POST_LINK = "/data/product/";

    @Autowired
    ProductService productService;

    @Autowired
    GenerateId generateId;

    @GetMapping(BASE_POST_LINK + "getAll")
    public List<Product> getAll() {
        return productService.getAll();
    }

    @PostMapping(BASE_POST_LINK + "getById")
    public Product getById(@RequestBody ProductRequest productRequest) {
        return productService.getProductById(productRequest.getIdProduct());
    }

}
