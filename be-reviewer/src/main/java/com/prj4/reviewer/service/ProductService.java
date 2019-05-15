package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Product;
import com.prj4.reviewer.reporsitory.ProductReporsitory;
import com.prj4.reviewer.response.SearchResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    public List<SearchResponse> searchProduct(String query) {
        List<Product> lstProduct = productReporsitory.searchProduct(query);
        List<SearchResponse> lstSearch = new ArrayList<>();
        for (Product product : lstProduct) {
            String imgProduct = postService.getImagePostFromIdProduct(product.getIdProduct());
            String nameProduct = product.getNameProduct();
            SearchResponse searchResponse = new SearchResponse(product.getIdProduct(), imgProduct, nameProduct);
            lstSearch.add(searchResponse);
        }
        return lstSearch;
    }
    public List<SearchResponse> searchAllProduct() {
        List<Product> lstProduct = productReporsitory.findAllByOrderByDtCreatedDesc();
        List<SearchResponse> lstSearch = new ArrayList<>();
        int length = lstProduct.size() < 4 ? lstProduct.size(): 4 ;
        for (int i = 0; i < length; i++ ) {
            String imgProduct = postService.getImagePostFromIdProduct(lstProduct.get(i).getIdProduct());
            String nameProduct = lstProduct.get(i).getNameProduct();
            SearchResponse searchResponse = new SearchResponse(lstProduct.get(i).getIdProduct(),    imgProduct, nameProduct);
            lstSearch.add(searchResponse);
        }
        return lstSearch;
    }

    public void deleteProduct(String idProduct) {
        productReporsitory.deleteProductByIdProduct(idProduct);
    }

    public void updateProduct(Product product) {
        productReporsitory.save(product);
    }
}
