package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Product;
import com.prj4.reviewer.reporsitory.ProductReporsitory;
import com.prj4.reviewer.response.SearchReponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductReporsitory productReporsitory;
    @Autowired
    ImageService imageService;
    @Autowired
    PostService postService;

    public List<Product> getAll() {
        return (List<Product>) productReporsitory.findAll();
    }

    public void saveProduct(Product p) {
        productReporsitory.save(p);
    }

    public Product getProductById(String id) {
        return productReporsitory.findByIdProduct(id);
    }

    public void findAndUpdate(String id) {
        Product curProduct = productReporsitory.findByIdProduct(id);

    }

    public List<Product> getTopRating() {
        List<Product> lstProductOriginal = productReporsitory.findAllByOrderByNumRatingDesc();
        List<Product> lstResutl = new ArrayList<>();
        if (lstProductOriginal.size() > 0) {
            int n = lstProductOriginal.size() < 5 ? lstProductOriginal.size() : 5;
            for (int i = 0; i < n; i++) {
                lstResutl.add(lstProductOriginal.get(i));
            }
        }
        return lstResutl;
    }

    public List<SearchReponse> searchProduct(String query) {
        List<Product> lstProduct = productReporsitory.searchProduct(query);
        List<SearchReponse> lstSearch = new ArrayList<>();
        for (Product product : lstProduct) {
            String imgProduct = postService.getImagePostFromIdProduct(product.getIdProduct());
            String nameProduct = product.getNameProduct();
            SearchReponse searchReponse = new SearchReponse(imgProduct, nameProduct);
            lstSearch.add(searchReponse);
        }
        return lstSearch;
    }
}
