package com.prj4.reviewer.controller;

import com.prj4.reviewer.request.LoginInfoRequest;
import com.prj4.reviewer.response.LoginInfo;
import com.prj4.reviewer.response.SearchResponse;
import com.prj4.reviewer.service.AdminService;
import com.prj4.reviewer.service.CompanyService;
import com.prj4.reviewer.service.ProductService;
import com.prj4.reviewer.service.ReviewerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class MainController {
    private final static String BASE_POST_LINK = "/data/main/";

    @Autowired
    ProductService productService;

    @Autowired
    ReviewerService reviewerService;

    @Autowired
    CompanyService companyService;

    @Autowired
    AdminService adminService;

    @PostMapping(BASE_POST_LINK + "searchProduct")
    List<SearchResponse> getReviewerInfo(@RequestBody String query) {
        if (query.equals("ALL")) {
            return productService.searchAllProduct();
        }
        return productService.searchProduct(query);
    }

    @PostMapping(BASE_POST_LINK + "getLoginInfo")
    LoginInfo getLoginInfo(@RequestBody LoginInfoRequest loginInfoRequest) {
        String fullName = null;
        String avatar = null;
        if (loginInfoRequest.getRole_user().equals("ROLE_NORMAL")) {
            fullName = reviewerService.getReviewerByIdReviewer(loginInfoRequest.getIdUser()).getFullName();
            avatar = reviewerService.getImageAvatarByIdReviewer(loginInfoRequest.getIdUser());
        } else if (loginInfoRequest.getRole_user().equals("ROLE_COMPANY")){
            fullName = companyService.getNameCompanyById(loginInfoRequest.getIdUser());
            avatar = companyService.getImageAvaComp(loginInfoRequest.getIdUser());
        } else {
            fullName = adminService.findByIdAdmin(loginInfoRequest.getIdUser()).getFullNameAdmin();
            avatar = "http://localhost/img/reviewer/avar-pay.png";
        }
        LoginInfo loginInfo = new LoginInfo(fullName, avatar);
        return loginInfo;
    }

}
