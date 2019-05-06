package com.prj4.reviewer.controller;

import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Product;
import com.prj4.reviewer.entity.RatingPost;
import com.prj4.reviewer.request.RatingRequest;
import com.prj4.reviewer.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)

public class RatingController {
    private final static String BASE_POST_LINK = "/data/rating/";

    @Autowired
    RatingService ratingService;

    @Autowired
    ProductService productService;

    @Autowired
    GenerateId generateId;

    @GetMapping(BASE_POST_LINK + "getAll")
    public List<RatingPost> getAll() {
        return ratingService.getAllRating();
    }

    @PostMapping(BASE_POST_LINK + "create")
    public JsonResponse<String> create(@RequestBody RatingRequest ratingRequest) {
        try {
            String id;
            RatingPost curRatingPost;
            String idProduct = ratingRequest.getIdProduct();
            String idReviewer = ratingRequest.getIdReviewer();
            Date dtCreated = ratingRequest.getDtCreated();
            float rtBattery = ratingRequest.getRtBattery();
            float rtDisplay = ratingRequest.getRtDisplay();
            float rtPerformance = ratingRequest.getRtPerformance();
            float rtDesign = ratingRequest.getRtDesign();
            float rtCamera = ratingRequest.getRtCamera();
            int plusNum = 0;
            RatingPost checkRating = ratingService.findByIdProductAndIdReviewer(idProduct, idReviewer);
            float curBattery = rtBattery;
            float curDisplay = rtDisplay;
            float curPerformance = rtPerformance;
            float curDesign = rtDesign;
            float curCamera = rtCamera;


            if (checkRating != null) {
                id = checkRating.getIdRatingProduct();
                curRatingPost = ratingService.findByIdRating(id);

                curBattery = rtBattery - curRatingPost.getRtBattery();
                curDisplay = rtDisplay - curRatingPost.getRtDisplay();
                curPerformance = rtPerformance - curRatingPost.getRtPerformance();
                curDesign = rtDesign - curRatingPost.getRtDesign();
                curCamera = rtCamera - curRatingPost.getRtCamera();

                curRatingPost.setRtBattery(rtBattery);
                curRatingPost.setRtDisplay(rtDisplay);
                curRatingPost.setRtPerformance(rtPerformance);
                curRatingPost.setRtDesign(rtDesign);
                curRatingPost.setRtCamera(rtCamera);
            } else {
                plusNum = 1;
                id = generateId.generateId("RATING_", new Date());
                curRatingPost = new RatingPost(id, idProduct, idReviewer, dtCreated, rtBattery, rtDisplay, rtPerformance, rtDesign, rtCamera);
            }
            ratingService.saveRating(curRatingPost);

            // Update Product Avg
            Product curProduct = productService.getProductById(idProduct);
            int numRating = curProduct.getNumRating();
            float avgBattery = curProduct.getAvgBattery() * numRating;
            float avgDisplay = curProduct.getAvgDisplay() * numRating;
            float avgPerformance = curProduct.getAvgPerformance() * numRating;
            float avgDesign = curProduct.getAvgDesign() * numRating;
            float avgCamera = curProduct.getAvgCamera() * numRating;
            int curNumRating = numRating + plusNum;
            curProduct.setAvgBattery((avgBattery + curBattery) / curNumRating);
            curProduct.setAvgDisplay((avgDisplay + curDisplay) / curNumRating);
            curProduct.setAvgPerformance((avgPerformance + curPerformance) / curNumRating);
            curProduct.setAvgDesign((avgDesign + curDesign) / curNumRating);
            curProduct.setAvgCamera((avgCamera + curCamera) / curNumRating);
            curProduct.setNumRating(curNumRating);
            productService.saveProduct(curProduct);

        } catch (Exception ex) {
            return JsonResponse.reject(ex.getMessage());
        }
        return JsonResponse.accept("Success");
    }

    @PostMapping(BASE_POST_LINK + "findByProductAndReviewer")
    public RatingPost findByProductAndReviewer(@RequestBody RatingRequest ratingRequest) {
        System.out.println(ratingRequest.getIdProduct());
        System.out.println(ratingRequest.getIdReviewer());
        RatingPost curRating = ratingService.findByIdProductAndIdReviewer(ratingRequest.getIdProduct(), ratingRequest.getIdReviewer());
        if (curRating == null) return null;
        if (curRating.getIdReviewer().equals(ratingRequest.getIdReviewer())) {
            return curRating;
        } else {
            return null;
        }
    }

}
