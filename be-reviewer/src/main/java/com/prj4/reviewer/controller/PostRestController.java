package com.prj4.reviewer.controller;

import com.prj4.reviewer.core.Constants;
import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Images;
import com.prj4.reviewer.entity.Product;
import com.prj4.reviewer.response.PostResponse;
import com.prj4.reviewer.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.prj4.reviewer.entity.Post;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class PostRestController {

    private final static String BASE_POST_LINK = "/data/posts/";
    private final static String NO_TOKEN = "/signup/";

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
    CreatePostResponseService createPostResponseService;

    @Autowired
    GenerateId generateId;

    @GetMapping(NO_TOKEN + "getAll")
    public List<PostResponse> getAll() {
        List<Post> lstPost = postService.getAllPostByDtCreated();
        return createPostResponseService.createListPostReponse(lstPost);
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
                infoBattery , infoDisplay, infoPerformance, infoDesign,infoCamera, true );
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
        return createPostResponseService.createListPostReponse(lstPost);
    }

    @PostMapping(BASE_POST_LINK + "getDetailPost")
    public  PostResponse getDetailPost(@RequestBody String idProduct) {
        Post p = postService.getPostByIdProduct(idProduct);
        Product product = productService.getProductById(idProduct);
        String imgPost = postService.getImagePost(p.getIdImage());
        String nameCompany = companyService.getNameCompanyById(p.getIdCompany());
        String avatarCompany = companyService.getImageAvaComp(p.getIdCompany());
        PostResponse postResponse= new PostResponse(p.getIdPostProduct(), p.getIdProduct(), p.getIdCompany(), nameCompany,
                p.getContentPost(), avatarCompany, imgPost, product.getAvgDisplay(), product.getAvgPerformance(),
                product.getAvgCamera(),product.getAvgBattery(), product.getAvgDesign(), 0,
                product.getInfoBattery(), product.getInfoDisplay(), product.getInfoPerformance(),
                product.getInfoDesign(),product.getInfoCamera(), p.getDtCreated(), product.getNameProduct(), product.getIsActive());
        return postResponse;
    }

    @PostMapping(BASE_POST_LINK + "getPostToCompare")
    public List<PostResponse> getPostToCompare(@RequestBody List<String> lstIdProduct) {
        List<Post> lstPost = postService.getPostToCompare(lstIdProduct);
        return createPostResponseService.createListPostReponse(lstPost);
    }

    @PostMapping(BASE_POST_LINK + "updateProduct")
    public JsonResponse<String> update(@RequestParam(value = "file", required = false) MultipartFile file,
                                       @RequestParam("nameProduct") String nameProduct,
                                       @RequestParam("contentPost") String contentPost,
                                       @RequestParam("infoBattery") String infoBattery,
                                       @RequestParam("infoDisplay") String infoDisplay,
                                       @RequestParam("infoPerformance") String infoPerformance,
                                       @RequestParam("infoDesign") String infoDesign,
                                       @RequestParam("infoCamera") String infoCamera,
                                       @RequestParam("idProduct") String idProduct) {
        Product product = productService.getProductById(idProduct);
        Post post = postService.getPostByIdProduct(idProduct);
        String idImage = post.getIdImage();
        Images images = imageService.getImagesById(idImage);
        if (contentPost != null) {
            post.setContentPost(contentPost);
        }
        if (nameProduct != null) {
            product.setNameProduct(nameProduct);
        }
        if (infoBattery != null) {
            product.setInfoBattery(infoBattery);
        }
        if (infoDisplay != null) {
            product.setInfoDisplay(infoDisplay);
        }
        if (infoPerformance != null) {
            product.setInfoPerformance(infoPerformance);
        }
        if (infoDesign != null) {
            product.setInfoDesign(infoDesign);
        }
        if (infoCamera != null) {
            product.setInfoCamera(infoCamera);
        }
        if (file != null) {
            String fileName =  fileStorageService.storeFile(file, null, Constants.POST_IMG);
            String fileDownloadUri = "http://localhost/img/reviewer/" + fileName;
            images.setImgPath(fileDownloadUri);
        }
        try {
            postService.updatePost(post);
            productService.updateProduct(product);
            imageService.saveImage(images);
            return JsonResponse.accept("success");
        }catch (Exception ex) {
            return JsonResponse.reject(ex.getMessage());
        }
    }

    @PostMapping(BASE_POST_LINK + "deleteProduct")
    public JsonResponse<String> deleteProduct(@RequestBody String idProduct) {
        try {
            postService.deletePost(idProduct);
            productService.deleteProduct(idProduct);
            String idImage = postService.getPostByIdProduct(idProduct).getIdImage();
            imageService.deleteImage(idImage);
            return JsonResponse.accept("success");
        } catch(Exception ex) {
            return JsonResponse.reject(ex.getMessage());
        }

    }


}
