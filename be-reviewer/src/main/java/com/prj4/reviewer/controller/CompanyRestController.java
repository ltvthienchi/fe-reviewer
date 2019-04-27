package com.prj4.reviewer.controller;

import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Company;
import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.request.CompanyRequest;
import com.prj4.reviewer.service.CompanyService;
import com.prj4.reviewer.service.GenerateId;
import com.prj4.reviewer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.sql.Timestamp;
import java.util.Date;


@RestController

public class CompanyRestController {

    private final static String BASE_POST_LINK = "/data/company/";

    @Autowired
    CompanyService companyService;

    @Autowired
    GenerateId generateId;

    @Autowired
    UserService userService;


    @PostMapping(BASE_POST_LINK + "createComp")
    public JsonResponse<String> createCompany(@RequestBody @Valid CompanyRequest companyRequest) {

        String idCompany = generateId.generateId("COMPANY_", new Date());
        String idAccount = generateId.generateId("ACCOUNT_", new Date());
        Timestamp ts=new Timestamp(companyRequest.getDtCreated());
        //Date createdCompany = new Date(ts.getTime());
        Company comp = new Company(idCompany,companyRequest.getNameCompany(),companyRequest.getAddrCompany(),
                companyRequest.getWebCompany(), null, companyRequest.getTelCompany(),
                new Date(), idAccount, null,
                null, companyRequest.getEmailCompany());

        User userAccount = new User(idAccount, companyRequest.getEmailCompany(), companyRequest.getPassword(), 2, true);

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
}
