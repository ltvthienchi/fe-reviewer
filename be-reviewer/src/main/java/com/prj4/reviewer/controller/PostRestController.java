package com.prj4.reviewer.controller;

import com.prj4.reviewer.core.Constants;
import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Images;
import com.prj4.reviewer.entity.Product;
import com.prj4.reviewer.request.PostProductRequest;
import com.prj4.reviewer.request.PostRequest;
import com.prj4.reviewer.response.PostResponse;
import com.prj4.reviewer.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.prj4.reviewer.entity.Post;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class PostRestController {

    private final static String BASE_POST_LINK = "/data/posts/";

    @Autowired
    PostService postService;

    @Autowired
    FileStorageService fileStorageService;

    @Autowired
    CompanyService companyService;

    @Autowired
    ProductService productService;

    @Autowired
     ImageService imageService;

    @Autowired
    GenerateId generateId;

    @GetMapping(BASE_POST_LINK + "getAll")
    public List<Post> getAll() {
        return postService.getAllPost();
    }

    @PostMapping(BASE_POST_LINK + "postProduct")
    public JsonResponse<String> postProduct(@RequestBody PostProductRequest postProductRequest) {
        String fileName =  fileStorageService.storeFile(postProductRequest.getImageProduct());
        String idProduct = generateId.generateId("PRODUCT_", new Date());
        String idPost = generateId.generateId("POST_", new Date());
        String idImage = generateId.generateId("IMAGE_", new Date());
        String pathProduct = "/" + idProduct + "/";
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/" + pathProduct)
                .path(fileName)
                .toUriString();
        String idCompany = companyService.getCompanyId(postProductRequest.getEmailUser());
        Product product = new Product(idProduct, postProductRequest.getNameProduct(), null,
                new Date(), 0 ,0,
                0, 0,0,0);
        Post post = new Post(idPost, idProduct, idCompany,
                postProductRequest.getContentPost(), new Date(), idImage);

        Images images = new Images(idImage, fileDownloadUri, Constants.POST_IMG);

        try {
            postService.createPost(post);
            productService.saveProduct(product);
            imageService.saveImage(images);
        } catch (Exception ex) {
            JsonResponse.reject(ex.getMessage());
        }


        return JsonResponse.accept("Success");
    }


}
