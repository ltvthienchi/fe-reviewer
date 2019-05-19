package com.prj4.reviewer.controller;

import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.*;
import com.prj4.reviewer.request.*;
import com.prj4.reviewer.response.*;
import com.prj4.reviewer.service.AdminService;
import com.prj4.reviewer.service.GenerateId;
import com.prj4.reviewer.service.*;
import jdk.nashorn.internal.runtime.events.RecompilationEvent;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class AdminRestController {
    private final static String BASE_POST_LINK = "/data/admin/";
    @Autowired
    AdminService adminService;
    @Autowired
    CompanyService companyService;
    @Autowired
    UserService userService;
    @Autowired
    ReviewerService reviewerService;
    @Autowired
    FeedbackAdminService feedbackAdminService;
    @Autowired
    GenerateId generateId;
    @Autowired
    PostService postService;
    @Autowired
    CreatePostResponseService createPostResponseService;
    @Autowired
    CommentService commentService;
    @Autowired
    public JavaMailSender emailSender;
    @Autowired
    public ChartService chartService;

    @PostMapping(BASE_POST_LINK + "createAdmin")
    public JsonResponse<String> createAdmin(@RequestBody @Valid AdminRequest adminRequest) {

        String idAdmin = generateId.generateId("ADMIN_", new Date());
        String encodedPass = new BCryptPasswordEncoder().encode(adminRequest.getPassAdmin());
        Admin admin = new Admin(idAdmin, adminRequest.getFullNameAdmin() ,adminRequest.getEmailAdmin(),encodedPass,adminRequest.getDobAdmin(),
                new Date(),true,adminRequest.getAddressAdmin(),adminRequest.getPhoneAdmin(), adminRequest.getRole());
        adminService.save(admin);
        return JsonResponse.accept("");
    }

    @GetMapping(BASE_POST_LINK + "getAllAdmin")
    public List<Admin> getAllAdmin(){

        return adminService.findAllAdmin();
    }

    @PostMapping(BASE_POST_LINK + "editAdmin")
    public JsonResponse<String> editAdmin(@RequestBody @Valid AdminRequest adminRequest){

        Admin admin = adminService.findByIdAdmin(adminRequest.getIdAdmin());
        // admin.setActive(adminRequest.isActive());
        admin.setDobAdmin(adminRequest.getDobAdmin());
        admin.setEmailAdmin(adminRequest.getEmailAdmin());
        admin.setFullNameAdmin(adminRequest.getFullNameAdmin());
       // String encodedPass = new BCryptPasswordEncoder().encode(adminRequest.getPassAdmin());
       // admin.setPassAdmin(encodedPass);
        admin.setAddressAdmin(adminRequest.getAddressAdmin());
        admin.setPhoneAdmin(adminRequest.getPhoneAdmin());
        admin.setRoleAdmin(adminRequest.getRole());
        adminService.editAdmin(admin);


        return JsonResponse.accept("");
    }

    @PostMapping(BASE_POST_LINK + "lockAdmin")
    public JsonResponse<String> lockAdmin(@RequestBody @Valid AdminBlockRequest adminBlockRequest){
        Admin admin = adminService.findByIdAdmin(adminBlockRequest.getIdAdmin());
        Boolean a = Boolean.valueOf(adminBlockRequest.getIsActive());
        admin.setActive(!a);
        adminService.save(admin);
        return JsonResponse.accept("");
    }

    @PostMapping(BASE_POST_LINK + "getRole")
    public String getRole(@RequestBody @Valid AdminBlockRequest adminBlockRequest){
        Admin admin = adminService.findByIdAdmin(adminBlockRequest.getIdAdmin());
        return admin.getRoleAdmin();
    }

    @PostMapping(BASE_POST_LINK + "resetPassAdmin")
    public JsonResponse<String> resetPassAdmin(@RequestBody @Valid AdminResetPass adminResetPass){
        Admin admin = adminService.findByIdAdmin(adminResetPass.getIdAdmin());
        String encodedPass = new BCryptPasswordEncoder().encode(adminResetPass.getPassAdmin());
        admin.setPassAdmin(encodedPass);
        adminService.save(admin);
        return JsonResponse.accept("");
    }


    @GetMapping(BASE_POST_LINK + "getAllProduct")
    public List<PostResponse> getAllProduct() {
        List<Post> lstPost = postService.getAllPostByDtCreated();
        return createPostResponseService.createListPostReponse(lstPost);
    }

    @GetMapping(BASE_POST_LINK + "getAllCommentReported")
    public List<CommentReported> getAllCommentReported() {
        List<CommentReported> lstCommentReported = new ArrayList<>();
        return commentService.getAllCommentReported();
    }

    @PostMapping(BASE_POST_LINK + "deleteComment")
    public JsonResponse<String> deleteComment(@RequestBody String idComment) {
        try {
            commentService.deleteComment(idComment);
            return JsonResponse.accept("success");
        } catch(Exception ex) {
            return JsonResponse.reject(ex.getMessage());
        }

    }



    @GetMapping(BASE_POST_LINK + "getAllReviewer")
    public List<ReviewerActiveResponse> getAllReviewer(){
        List <Reviewer> lstReviewer = reviewerService.getAll();
        List<ReviewerActiveResponse> lstRe = new ArrayList<>();
        for(Reviewer r : lstReviewer) {
            String idAccount = r.getIdAccount();
            User user = userService.findById(idAccount);
            ReviewerActiveResponse reviewerActiveResponse = new ReviewerActiveResponse(r.getIdReviewer(),r.getFullName(),
                    r.getFirstName(),r.getLastName(),r.getEmail(),r.getDateOfBirth(),r.getDateCreated(),
                    r.getGender(),r.getIdAccount(),user.isActive());
            lstRe.add(reviewerActiveResponse);

        }


        return lstRe;
    }

    @GetMapping(BASE_POST_LINK + "getAllBusiness")
    public List<CompanyActiveResponse> getAllBusiness(){

        List <Company> lstCompany = companyService.getAll();
        List<CompanyActiveResponse> lstCpn = new ArrayList<>();
        for(Company c : lstCompany) {
            String idAccount = c.getIdAccount();
            User user = userService.findById(idAccount);
            CompanyActiveResponse companyActiveResponse = new CompanyActiveResponse(c.getIdCompany(),c.getNameCompany(),
                    c.getAddrCompany(),c.getWebCompany(),c.getZipCompany(),c.getTelCompany(),c.getDtCreated(),
                    c.getIdAccount(),c.getEmailCompany(),c.getAvgRatingComp(),user.isActive());
            lstCpn.add(companyActiveResponse);

        }


        return lstCpn;
    }

    @PostMapping(BASE_POST_LINK + "changeActive")
    public JsonResponse changeActive(@RequestBody UserActiveRequest userActiveRequest) {
        userService.changActive(userActiveRequest.getIdUser(),userActiveRequest.getIsActive());
        return JsonResponse.accept("");
    }

    @PostMapping(BASE_POST_LINK + "sendMail")
    public JsonResponse sendMail(@RequestBody FeedbackSendMailRequest feedbackSendMailRequest) throws MessagingException {


        MimeMessage message = emailSender.createMimeMessage();

        boolean multipart = true;

        MimeMessageHelper helper = new MimeMessageHelper(message, multipart, "utf-8");

        String htmlMsg = "<h3>"+feedbackSendMailRequest.getContent()+"</h3>";


        message.setContent(htmlMsg, "text/html");

        helper.setTo(feedbackSendMailRequest.getEmail());

        helper.setSubject("Reply feedback Reviewer website");

        this.emailSender.send(message);

        FeedbackAdmin feedbackAdmin = feedbackAdminService.findByIdFeedbackAdmin(feedbackSendMailRequest.getIdFeedback());
        feedbackAdmin.setIsReply(true);
        feedbackAdminService.save(feedbackAdmin);

        return JsonResponse.accept("");
    }

    @GetMapping(BASE_POST_LINK + "getColumnChart")
    public List<ChartResponse> getColumnChart() {
        return chartService.getColumnChartInfor();
    }

    @GetMapping(BASE_POST_LINK + "getCircleChart")
    public List<ChartResponse> getCircleChart() {
        return chartService.getCircleChartInfo();
    }

    @GetMapping(BASE_POST_LINK + "getAllCounts")
    public List<ChartResponse> getAllCounts() {
        return chartService.getReportNumber();
    }



}
