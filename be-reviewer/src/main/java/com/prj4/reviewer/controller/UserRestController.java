package com.prj4.reviewer.controller;

import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Company;
import com.prj4.reviewer.entity.Reviewer;
import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.request.UseRequest;
import com.prj4.reviewer.service.GenerateId;
import com.prj4.reviewer.service.ReviewerService;
import com.prj4.reviewer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.SpringVersion;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import javax.validation.Valid;
import java.util.Date;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserRestController {
    private final static String BASE_POST_LINK = "/data/user/";
    private final static String SIGN_UP_LINK = "/signup/";

    @Autowired
    UserService userService;

    @Autowired
    ReviewerService reviewerService;

    @Autowired
    GenerateId generateId;

//    @Autowired
//    private Md5PasswordEncoder md5PasswordEncoder;


    @PostMapping(SIGN_UP_LINK + "createUser")
    public JsonResponse<String> createUser(@RequestBody @Valid UseRequest userRequest) {

        String idReviewer = generateId.generateId("REVIEWER_", new Date());
        String idAccount = generateId.generateId("ACCOUNT_", new Date());

        String encodedPass = new BCryptPasswordEncoder().encode(userRequest.getPassAccount());
        User userAccount = new User(idAccount, userRequest.getUserName(), encodedPass,
                userRequest.getTypeAccount(), userRequest.isActive());

        Reviewer reviewer = new Reviewer(idReviewer, userRequest.getNameAccount(), userRequest.getUserName(), null, new Date(),
                idAccount, null, null, 1);

        if (!userService.isExistingAccount(userRequest.getUserName()) &&
                !reviewerService.isExistingReviewer(userRequest.getUserName())) {
            try {
                userService.save(userAccount);
                reviewerService.saveReviewer(reviewer);
                return JsonResponse.accept("Success");
            } catch (Exception ex) {
                return JsonResponse.reject(ex.getMessage());
            }

        }
        return JsonResponse.reject("Account is created!");
    }
}


