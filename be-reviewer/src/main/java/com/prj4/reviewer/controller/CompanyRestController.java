package com.prj4.reviewer.controller;

import com.prj4.reviewer.core.Constants;
import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Company;
import com.prj4.reviewer.entity.Post;
import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.request.CompanyRequest;
import com.prj4.reviewer.response.CompanyResponse;
import com.prj4.reviewer.response.DetailCompanyReponse;
import com.prj4.reviewer.response.PostResponse;
import com.prj4.reviewer.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class CompanyRestController {

    private final static String BASE_POST_LINK = "/data/company/";
    private final static String SIGN_UP_LINK = "/signup/";

    @Autowired
    CompanyService companyService;

    @Autowired
    PostService postService;

    @Autowired
    ProductService productService;

    @Autowired
    GenerateId generateId;

    @Autowired
    UserService userService;

    @Autowired
    ImageService imageService;

    @Autowired
    CreatePostResponseService createPostResponseService;

    @GetMapping(BASE_POST_LINK + "getAll")
    public List<Company> getAll() {
        return companyService.getAll();
    }

    @PostMapping(SIGN_UP_LINK + "createComp")
    public JsonResponse<String> createCompany(@RequestBody @Valid CompanyRequest companyRequest) {

        String idCompany = generateId.generateId("COMPANY_", new Date());
        String idAccount = generateId.generateId("ACCOUNT_", new Date());

        String encodedPass = new BCryptPasswordEncoder().encode(companyRequest.getPassword());

        Company comp = new Company(idCompany,companyRequest.getNameCompany(),companyRequest.getAddrCompany(),
                companyRequest.getWebCompany(), null, companyRequest.getTelCompany(),
                new Date(), idAccount, "9999",
                "8888", companyRequest.getEmailCompany(), 0);

        User userAccount = new User(idAccount, companyRequest.getEmailCompany(), encodedPass,
                companyRequest.getTypeAccount(), Constants.IS_TEST_MODE ? true : false);

        if (!userService.isExistingAccount(companyRequest.getEmailCompany()) &&
                !companyService.isExistingCompany(companyRequest.getEmailCompany())) {
            try {
                userService.save(userAccount);
                companyService.saveCompany(comp);
                return JsonResponse.accept("Success");
            } catch (Exception ex) {
                return JsonResponse.reject(ex.getMessage());
            }

        }
        return JsonResponse.reject("Account is created!");
    }

    @PostMapping(BASE_POST_LINK + "getCompanyById")
    public DetailCompanyReponse getCompanyById(@RequestBody String idCompany) {
        Company company = companyService.getCompanyById(idCompany);
        String imgAvatarCompany = imageService.getImagePathById(company.getImgAvatarCompany());
        String imgPanelCompany = imageService.getImagePathById(company.getImgPanelCompany());
        CompanyResponse companyResponse = new CompanyResponse(company.getIdCompany(),company.getNameCompany(),
                company.getAddrCompany(), company.getWebCompany(), company.getTelCompany(),
                imgAvatarCompany, imgPanelCompany,
                company.getEmailCompany(), company.getAvgRatingComp());
        List<Post> lstPostOrigin = postService.getAllPostByComId(idCompany);
        List<PostResponse> lstPost = createPostResponseService.createListPostReponse(lstPostOrigin);
        DetailCompanyReponse detailCompanyReponse = new DetailCompanyReponse(companyResponse, lstPost);
        return detailCompanyReponse;
    }


}
