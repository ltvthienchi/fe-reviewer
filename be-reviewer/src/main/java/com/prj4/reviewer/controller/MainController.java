package com.prj4.reviewer.controller;

import com.prj4.reviewer.response.LoginInfo;
import com.prj4.reviewer.response.SearchReponse;
import com.prj4.reviewer.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class MainController {
    private final static String BASE_POST_LINK = "/data/main/";

    @Autowired
    ProductService productService;

    @PostMapping(BASE_POST_LINK + "searchProduct")
    List<SearchReponse> getReviewerInfo(@RequestBody String query) {
        return productService.searchProduct(query);
    }

}
