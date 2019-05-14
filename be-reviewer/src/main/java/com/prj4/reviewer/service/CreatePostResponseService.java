package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Post;
import com.prj4.reviewer.entity.Product;
import com.prj4.reviewer.response.PostResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CreatePostResponseService {

    @Autowired
    ProductService productService;

    @Autowired
    CompanyService companyService;

    @Autowired
    PostService postService;

    public List<PostResponse> createListPostReponse(List<Post> lstPost) {
        List<PostResponse> lstPostResponse= new ArrayList<>();
        for(Post p : lstPost) {
            Product product = productService.getProductById(p.getIdProduct());
            String imgPost = postService.getImagePost(p.getIdImage());
            String nameCompany = companyService.getNameCompanyById(p.getIdCompany());
            String avatarCompany = companyService.getImageAvaComp(p.getIdCompany());
            PostResponse postResponse= new PostResponse(p.getIdPostProduct(), p.getIdProduct(), p.getIdCompany(), nameCompany,
                    p.getContentPost(), avatarCompany, imgPost, product.getAvgDisplay(), product.getAvgPerformance(),
                    product.getAvgCamera(),product.getAvgBattery(), product.getAvgDesign(), 0,
                    product.getInfoBattery(), product.getInfoDisplay(), product.getInfoPerformance(),
                    product.getInfoDesign(),product.getInfoCamera(), p.getDtCreated(), product.getNameProduct(), product.getIsActive());
            lstPostResponse.add(postResponse);

        }
        return lstPostResponse;
    }
}
