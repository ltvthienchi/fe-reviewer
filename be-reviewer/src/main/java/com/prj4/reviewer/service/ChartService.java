package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Company;
import com.prj4.reviewer.response.ChartResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChartService {

    @Autowired
    HistoryService historyService;
    @Autowired
    CompanyService companyService;
    @Autowired
    ProductService productService;
    @Autowired
    CommentService commentService;
    @Autowired
    ReviewerService reviewerService;
    @Autowired
    RatingService ratingService;
    @Autowired
    PostService postService;


    public List<ChartResponse> getColumnChartInfor() {
        List<Company> lstCompany = companyService.getAll();
        List<ChartResponse> lstResult = new ArrayList<>();
        for (Company comp : lstCompany) {
            int numbProduct = postService.getNumbProductByIdCompany(comp.getIdCompany());
            String nameCompany = comp.getNameCompany();
            ChartResponse chartResponse = new ChartResponse(numbProduct, nameCompany);
            lstResult.add(chartResponse);
        }
        return lstResult;
    }

    public List<ChartResponse> getCircleChartInfo() {
        return historyService.getChartReponse();
    }


    public List<ChartResponse> getReportNumber() {
        List<ChartResponse> lstResult = new ArrayList<>();
        int numbBusiness = companyService.getCountCompanies();
        int numbProducts = productService.getCountProducts();
        int numbComments = commentService.getCountComments();
        int numbReviewers = reviewerService.getCountReviewers();
        int numbRatings = ratingService.getCountRatingPosts();
        ChartResponse chartResponseComp = new ChartResponse(numbBusiness, "COMPANY");
        ChartResponse chartResponsePro = new ChartResponse(numbProducts, "PRODUCT");
        ChartResponse chartResponseComm = new ChartResponse(numbComments, "COMMENT");
        ChartResponse chartResponseRev = new ChartResponse(numbReviewers, "REVIEWER");
        ChartResponse chartResponseRate = new ChartResponse(numbRatings, "RATING");
        lstResult.add(chartResponseComp);
        lstResult.add(chartResponsePro);
        lstResult.add(chartResponseComm);
        lstResult.add(chartResponseRev);
        lstResult.add(chartResponseRate);
        return lstResult;
    }
}
