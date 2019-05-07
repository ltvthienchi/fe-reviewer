package com.prj4.reviewer.controller;

import com.prj4.reviewer.core.Constants;
import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Images;
import com.prj4.reviewer.entity.Product;
import com.prj4.reviewer.request.PostProductRequest;
import com.prj4.reviewer.response.PostResponse;
import com.prj4.reviewer.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.prj4.reviewer.entity.Post;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.ArrayList;
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
    public List<PostResponse> getAll() {
        List<Post> lstPost = postService.getAllPostByDtCreated();
        return createListPostReponse(lstPost);
    }

    @PostMapping(BASE_POST_LINK + "postProduct")
    public JsonResponse<String> postProduct(
            @RequestParam("file") MultipartFile file,
            @RequestParam("nameProduct") String nameProduct,
            @RequestParam("contentPost") String contentPost,
            @RequestParam("infoBattery") String infoBattery,
            @RequestParam("infoDisplay") String infoDisplay,
            @RequestParam("infoPerformance") String infoPerformance,
            @RequestParam("infoDesign") String infoDesign,
            @RequestParam("infoCamera") String infoCamera,
            @RequestParam("emailCompany") String emailCompany) {

        String idProduct = generateId.generateId("PRODUCT_", new Date());
        String idPost = generateId.generateId("POST_", new Date());
        String idImage = generateId.generateId("IMAGE_", new Date());

        String fileName =  fileStorageService.storeFile(file, idImage, Constants.POST_IMG);

        String fileDownloadUri = "http://localhost/img/reviewer/" + fileName;
        String idCompany = companyService.getCompanyId(emailCompany);
        Product product = new Product(idProduct, nameProduct, null,
                new Date(), 0 ,0,
                0, 0,0,0,
                infoBattery , infoDisplay, infoPerformance, infoDesign,infoCamera );
        Post post = new Post(idPost, idProduct, idCompany,
                contentPost, new Date(), idImage);

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

    @GetMapping(BASE_POST_LINK + "getAllByComId")
    public List<PostResponse> getAllByComId(@RequestBody String idCompany) {
        List<Post> lstPost = postService.getAllPostByComId(idCompany);
        return createListPostReponse(lstPost);
    }

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
                    product.getInfoDesign(),product.getInfoCamera(), p.getDtCreated());
            lstPostResponse.add(postResponse);

        }
        return lstPostResponse;
    }


}
